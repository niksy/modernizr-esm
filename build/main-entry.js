const path = require('path');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');
const t = require('@babel/types');
const { default: template } = require('@babel/template');
const amd = require('rollup-plugin-amd');
const { modernizrDir, entryDependencies, version } = require('./util');
const handleGlobalReference = require('./handle-global-reference');

const babelPlugin = () => {
	const addToQueueNode = () => {
		return template(`
			for ( var i = 0; i < Modernizr._q.length; i++ ) {
				Modernizr._q[i]();
			}
		`)();
	};

	const onListenerNode = (callback) =>
		t.expressionStatement(
			t.callExpression(
				t.memberExpression(
					t.identifier('Modernizr'),
					t.identifier('on')
				),
				[t.identifier('feature'), t.identifier(callback)]
			)
		);

	const asyncTestListenerNode = () => {
		return template(`
			function createAsyncTestListener ( IDENTIFIER ) {
				return function (cb) {
					if ( typeof cb === "function" ) {
						Modernizr.on(IDENTIFIER, cb);
						return;
					}

					return new Promise(function ( resolve ) {
						Modernizr.on(IDENTIFIER, resolve);
					});
				};
			}
		`)({
			IDENTIFIER: t.identifier('feature')
		});
	};

	const addTestResultNode = () => {
		return template(`
			function addTestResult ( featureNameSplit, result ) {
				if (featureNameSplit.length === 1) {
					Modernizr[featureNameSplit[0]] = result;
				} else {
					if (typeof Modernizr[featureNameSplit[0]] === 'undefined') {
						Modernizr[featureNameSplit[0]] = result;
					}
					if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
						Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
					}

					Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
				}
			}
		`)();
	};

	return {
		visitor: {
			Program(path) {
				/*
				 * Export `addTest` and `createAsyncTestListener` as named exports
				 * so they can be used in async tests
				 */
				path.pushContainer('body', [
					t.exportNamedDeclaration(null, [
						t.exportSpecifier(
							t.identifier('addTest'),
							t.identifier('addTest')
						),
						t.exportSpecifier(
							t.identifier('createAsyncTestListener'),
							t.identifier('createAsyncTestListener')
						)
					])
				]);
			},
			StringLiteral(path) {
				// Replace version placeholder in Modernizr prototype to current version
				if (path.get('value').node === '__VERSION__') {
					path.replaceWith(t.stringLiteral(version));
				}
			},
			Identifier(path) {
				// Remove `Modernizr.addTest` from queue callback since we call it directly
				if (path.get('name').node === 'addTest') {
					const addTestParent = path.findParent((path) =>
						path.isAssignmentExpression()
					);
					if (addTestParent !== null) {
						addTestParent.remove();
					}
				}
				// Normalize references to `Modernizr` and `hasOwnProp`
				['Modernizr$1', 'hasOwnProp$1'].forEach((property) => {
					if (path.get('name').node === property) {
						const variableDeclarationParent = path.findParent(
							(path) => path.isVariableDeclaration()
						);
						if (
							variableDeclarationParent &&
							variableDeclarationParent
								.get('declarations')[0]
								.get('id') === path
						) {
							variableDeclarationParent.remove();
						} else {
							path.replaceWith(
								t.identifier(property.replace('$1', ''))
							);
						}
					}
				});
			},
			VariableDeclaration(path) {
				// Remove `classes` variable
				if (
					path.get('declarations')[0].get('id.name').node ===
					'classes'
				) {
					path.remove();
				}
			},
			ImportDeclaration(path) {
				// Remove `classes` and `setClasses` import
				if (
					['classes', 'setClasses'].includes(
						path.get('specifiers')[0].get('local.name').node
					)
				) {
					path.remove();
				}
			},
			ExportDefaultDeclaration(path) {
				if (path.get('declaration.name').node === 'addTest') {
					// Add `addTestResult` function declaration
					path.insertBefore(addTestResultNode());

					// Add `createAsyncTestListener` function declearation
					path.insertBefore(asyncTestListenerNode());

					// Export `Modernizr` as default export instead of `addTest`
					path.replaceWith(
						t.exportDefaultDeclaration(t.identifier('Modernizr'))
					);
				}
			},
			MemberExpression(path) {
				/*
				 * Replace `testRunner` references as array pushing to `tests`
				 * This is due to AMD resolving
				 */
				if (
					path.get('object.name').node === 'testRunner' &&
					path.get('property.name').node === 'push'
				) {
					path.get('object').replaceWith(t.identifier('tests'));
				}

				/*
				 * Replace `tests` references as object getters to `Modernizr`
				 * This is due to AMD resolving
				 */
				if (
					path.get('object.name').node === 'tests' &&
					(path.get('property.object') &&
						path.get('property.object').isIdentifier())
				) {
					path.get('object').replaceWith(t.identifier('Modernizr'));
				}

				// Remove `classes` reference
				if (path.get('object.name').node === 'classes') {
					const parent = path.findParent((path) =>
						path.isExpressionStatement()
					);
					parent.remove();
				}
			},
			CallExpression(path) {
				// Remove `setClasses` function call
				if (path.get('callee.name').node === 'setClasses') {
					const parent = path.findParent((path) =>
						path.isExpressionStatement()
					);
					parent.remove();
				}
			},
			ObjectProperty(path) {
				/*
				 * Add callers to `testRunner` in `Modernizr.addTest` and `Modernizr.addAsyncTest`
				 * Reset `tests` to empty array
				 * Run queue
				 */
				if (
					path.get('key').isIdentifier() &&
					['addTest', 'addAsyncTest'].includes(
						path.get('key.name').node
					)
				) {
					path.get('value.body').pushContainer('body', [
						t.expressionStatement(
							t.callExpression(t.identifier('testRunner'), [])
						),
						t.expressionStatement(
							t.assignmentExpression(
								'=',
								t.identifier('tests'),
								t.arrayExpression()
							)
						),
						addToQueueNode()
					]);
				}
				// Remove `Modernizr._config` property from prototype
				if (
					path.get('key').isIdentifier() &&
					['_config'].includes(path.get('key.name').node)
				) {
					path.remove();
				}
			},
			IfStatement(path) {
				// Remove duplicate code for feature assigning, replacing it with `addTestResult` function call
				if (
					path.get('test.left').isMemberExpression() &&
					path.get('test.left.object.name').node ===
						'featureNameSplit' &&
					path.get('test.right.value').node === 1 &&
					path.findParent(
						(path) =>
							path.isFunctionDeclaration() &&
							path.get('id.name').node === 'addTestResult'
					) === null
				) {
					const identifierName = path
						.get('consequent.body')[0]
						.get('expression.right.name').node;
					path.replaceWith(
						t.expressionStatement(
							t.callExpression(t.identifier('addTestResult'), [
								t.identifier('featureNameSplit'),
								t.identifier(identifierName)
							])
						)
					);
				}
			}
		}
	};
};

const rollupPlugins = [
	amd({
		rewire(moduleId, parentPath) {
			if (
				!moduleId.includes('ModernizrProto') &&
				!moduleId.includes('Modernizr') &&
				!moduleId.includes('tests')
			) {
				return `./${moduleId}`;
			}
			if (
				parentPath.includes('testRunner') &&
				moduleId.includes('Modernizr')
			) {
				return path.resolve(modernizrDir, 'src/tests.js');
			}
			if (
				parentPath.includes('ModernizrProto') &&
				moduleId.includes('tests')
			) {
				return path.resolve(modernizrDir, 'src/testRunner.js');
			}
			return path.resolve(modernizrDir, `src/${moduleId}.js`);
		}
	}),
	{
		async renderChunk(source) {
			const ast = parse(source, {
				sourceType: 'module'
			});
			traverse(ast, babelPlugin().visitor);
			traverse(ast, handleGlobalReference({ isMainEntry: true }).visitor);
			const result = generate(ast);
			return `/** Original source code: \n${entryDependencies
				.map(
					(entryDependancy) =>
						` * https://github.com/Modernizr/Modernizr/blob/v${version}/src/${entryDependancy}`
				)
				.join('\n')}\n**/\n${result.code}`;
		}
	}
];

const rollupConfig = (dist, file) => ({
	input: file,
	output: {
		dir: path.resolve(dist, 'src'),
		entryFileNames: 'Modernizr.js',
		format: 'esm'
	},
	plugins: rollupPlugins,
	external: (id) => {
		if (
			entryDependencies.every(
				(entryDependancy) => !id.includes(entryDependancy)
			)
		) {
			return true;
		}
		return false;
	}
});

module.exports = rollupConfig;
