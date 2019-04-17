const path = require('path');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');
const t = require('@babel/types');
const amd = require('rollup-plugin-amd');
const { camelCase } = require('lodash');
const { version, modernizrDir } = require('./util');
const handleGlobalReference = require('./handle-global-reference');

const babelPlugin = () => {

	let exportValues = [];
	let modernizrImportPath = null;
	let normalizeModernizrImport = false;

	const namedExportNode = (exportValue, assignment) => t.exportNamedDeclaration(
		t.variableDeclaration('var', [
			t.variableDeclarator(
				t.identifier(camelCase(exportValue)),
				assignment
			)
		]),
		[]
	);

	const asyncTestListenerNode = (exportValue) => t.callExpression(t.identifier('createAsyncTestListener'), [
		t.stringLiteral(exportValue)
	]);

	return {
		visitor: {
			Program: {
				enter (path) {
					// Reset values on entering file
					exportValues = [];
					modernizrImportPath = null;
					normalizeModernizrImport = false;

					path.get('body').forEach((path) => {
						// Remove existing export declarations so we can create our own
						if (
							path.isExportDefaultDeclaration() ||
							path.isExportNamedDeclaration()
						) {
							path.remove();
						}
						// Store main entry import path where it only imports default export
						if (
							path.isImportDeclaration() &&
							path.get('specifiers').length === 1 &&
							path.get('specifiers')[0].get('local.name').node === 'Modernizr'
						) {
							modernizrImportPath = path;
						}
					});
				},
				exit (path) {
					/*
					 * If we have more than one export, we create named exports,
					 * and we take care if it’s sync or async test. We export
					 * variable with name same as the feature (camelcased if it
					 * contains invalid characters). If it’s sync test, we export
					 * feature, otherwise we export function which calls
					 * `Modernizr.on` with callback
					 */
					if (exportValues.length > 1) {
						path.pushContainer(
							'body',
							exportValues.map(({ exportValue, isSyncTest }) => {
								if (isSyncTest) {
									return namedExportNode(
										exportValue,
										t.memberExpression(
											t.identifier('Modernizr'),
											t.identifier(exportValue)
										)
									);
								}
								return namedExportNode(
									exportValue,
									asyncTestListenerNode(exportValue)
								);
							})
						);
					} else {
						/*
						 * If we have one export, we create default export,
						 * and we take care if it’s sync or async test. If it’s sync
						 * test, we export feature, otherwise we export function
						 * which calls `Modernizr.on` with callback
						 */
						path.pushContainer(
							'body',
							exportValues.map(({ exportValue, isSyncTest }) => {
								if (isSyncTest) {
									return t.exportDefaultDeclaration(t.memberExpression(
										t.identifier('Modernizr'),
										t.identifier(exportValue)
									));
								}
								return t.exportDefaultDeclaration(asyncTestListenerNode(exportValue));
							})
						);
					}

					// If import named exports from main entry and
					// we already import default export from main entry,
					// remove default export import
					if ( normalizeModernizrImport && modernizrImportPath !== null ) {
						modernizrImportPath.remove();
					}

				}
			},
			'MemberExpression|CallExpression' (path) {
				const program = path.findParent((path) => path.isProgram());
				let exportValue;

				// Replace all `Modernizr._config` references to their default values
				if (path.isMemberExpression()) {
					if (path.get('property.name').node === '_config') {
						path.parentPath.replaceWith(t.booleanLiteral(path.parentPath.get('property.name').node !==
									'classPrefix'));
					}
				}

				/*
				 * Collect all references to `Modernizr.addTest` to resolve
				 * export values
				 */
				if (path.isMemberExpression()) {
					const args = path.parentPath.get('arguments');
					if (
						path.get('property.name').node === 'addTest' &&
						(args && args[0] && args[0].isStringLiteral())
					) {
						exportValue = args[0].get('value').node;
					}
				}

				/*
				 * Collect all references to `addTest` in async tests to resolve
				 * export values
				 */
				if (path.isCallExpression()) {
					const args = path.get('arguments');
					if (
						path.get('callee.name').node === 'addTest' &&
						(args && args[0].isStringLiteral())
					) {
						exportValue = args[0].get('value').node;
					}
				}

				/*
				 * Collect all direct assignments to `Modernizr` if we
				 * don’t have sync or async test to resolve export values
				 */
				if (path.isMemberExpression()) {
					if (
						exportValue !== 'string' &&
						path.parentPath.isAssignmentExpression() &&
						path.get('object.name').node === 'Modernizr'
					) {
						exportValue = path.get('property.name').node;
					}
				}

				if (
					typeof exportValue !== 'string' ||
					exportValues.some(({ exportValue: existingExportValue }) => existingExportValue === exportValue)
				) {
					return;
				}
				exportValues.push({
					exportValue: exportValue,
					isSyncTest: path.isMemberExpression()
				});
			},
			ImportDeclaration (path) {
				/*
				 * References to `addTest` import should be replaced with
				 * named imports `addTest` and `createAsyncTestListener` coming
				 * from main entry. If we already import default export from
				 * main entry, add it to list of imports as default import
				 */
				if (path.get('source.value').node.includes('addTest.js')) {
					normalizeModernizrImport = true;
					path.replaceWith(t.importDeclaration(
						[
							...(modernizrImportPath !== null ? [t.importDefaultSpecifier(t.identifier('Modernizr'))] : []),
							t.importSpecifier(
								t.identifier('addTest'),
								t.identifier('addTest')
							),
							t.importSpecifier(
								t.identifier('createAsyncTestListener'),
								t.identifier('createAsyncTestListener')
							)
						],
						t.stringLiteral(path
							.get('source.value')
							.node.replace('addTest', 'Modernizr'))
					));
				}
			}
		}
	};
};

const rollupPlugins = [
	amd({
		rewire (moduleId, parentPath) {
			if (moduleId.includes('test/')) {
				const resolveFrom = path.dirname(parentPath);
				const modulePath = path.join(modernizrDir, `${moduleId.replace('test/', 'feature-detects/')}.js`);
				const finalPath = path.relative(resolveFrom, modulePath);
				if ( finalPath.includes('../') ) {
					return finalPath;
				}
				return `./${finalPath}`;
			}
			if (
				moduleId.includes('Modernizr') ||
				moduleId.includes('ModernizrProto')
			) {
				return `../src/Modernizr.js`;
			}
			if (moduleId.includes('addTest')) {
				return `../src/addTest.js`;
			}
			return `../src/${moduleId}.js`;
		}
	}),
	{
		async renderChunk (source, options) {
			const ast = parse(source, {
				sourceType: 'module',
			});
			traverse(ast, babelPlugin().visitor);
			traverse(ast, handleGlobalReference().visitor);
			const result = generate(ast);
			return `/** Original source code: https://github.com/Modernizr/Modernizr/blob/v${version}/feature-detects/${
				options.fileName
			} **/\n${result.code}`;
		}
	}
];

const rollupConfig = (dist, file, filePath) => ({
	input: file,
	output: {
		dir: path.resolve(dist, 'feature'),
		entryFileNames: filePath,
		format: 'esm'
	},
	plugins: rollupPlugins,
	external: (id) => true
});

module.exports = rollupConfig;
