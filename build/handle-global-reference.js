const t = require('@babel/types');
const globals = require('globals');
const { difference } = require('lodash');

const browserGlobals = difference(
	Object.keys(globals.browser),
	Object.keys(globals.node)
);
const customGlobals = ['docElement'];

function shouldHandleEnvironmentForPath(path, globalReferenceVariable) {
	/*
	 * Handle only if
	 * * is not inside function or is inside IIFE
	 * * is not variable declarator for browser check
	 * * doesn’t already have check for browser
	 * * is not inside `try` statement
	 * * is not default import specifier and identifier is not inside custom globals
	 * * is not part of Modernizr object
	 * * is not property of object which is considered browser global
	 */
	if (
		(Boolean(
			path.findParent(
				(path) =>
					path.isFunctionExpression() ||
					path.isArrowFunctionExpression() ||
					path.isFunctionDeclaration()
			)
		) === false ||
			Boolean(
				path.findParent(
					(path) =>
						path.isCallExpression() &&
						!path.parentPath.isLogicalExpression() &&
						path.get('callee').isFunctionExpression()
				)
			) === true) &&
		Boolean(
			path.findParent(
				(path) =>
					path.isVariableDeclarator() &&
					path.get('id.name').node === globalReferenceVariable.name
			)
		) === false &&
		Boolean(
			path.findParent(
				(path) =>
					path.isLogicalExpression() &&
					path.get('left.name').node === globalReferenceVariable.name
			)
		) === false &&
		Boolean(path.findParent((path) => path.isTryStatement())) === false &&
		(path.parentPath.isImportDefaultSpecifier() === true &&
			customGlobals.includes(path.get('name').node)) === false &&
		(path.parentPath.isMemberExpression() &&
			path.parentPath.get('object.name').node === 'Modernizr') ===
			false &&
		((path.parentPath.isMemberExpression() &&
			browserGlobals.includes(
				path.parentPath.get('object.name').node
			)) === false && path.parentPath.get('property') === path) === false
	) {
		return true;
	}
	return false;
}

const babelPlugin = (options = {}) => {
	const { isMainEntry = false } = options;

	let GLOBAL_REFERENCE_VARIABLE = null;
	let addGlobalReferenceCheck = false;

	const globalReferenceNode = () => {
		return t.variableDeclaration('var', [
			t.variableDeclarator(
				GLOBAL_REFERENCE_VARIABLE,
				t.binaryExpression(
					'!==',
					t.unaryExpression('typeof', t.identifier('window')),
					t.stringLiteral('undefined')
				)
			)
		]);
	};

	return {
		visitor: {
			Program: {
				enter(path) {
					if (GLOBAL_REFERENCE_VARIABLE === null) {
						GLOBAL_REFERENCE_VARIABLE = path.scope.generateUidIdentifier(
							'isBrowser'
						);
					}
				},
				exit(path) {
					if (addGlobalReferenceCheck === true) {
						// Get last import declaration
						const lastImportdeclaration = path
							.get('body')
							.filter((path) => {
								return path.isImportDeclaration();
							})
							.pop();

						/*
						 * Insert import for handled global references after Modernizr import (with same location),
						 * or if it doesn’t exist (like in case of "src" files), reference it relative to that file
						 */
						if (typeof lastImportdeclaration === 'undefined') {
							path.unshiftContainer('body', [
								globalReferenceNode()
							]);
						} else {
							lastImportdeclaration.insertAfter(
								globalReferenceNode()
							);
						}
					}
				}
			},
			Identifier(path) {
				let foundPath = null;

				// Handle feature function calls in main entry
				if (isMainEntry) {
					if (path.get('name').node === 'fn') {
						foundPath = path.findParent(
							(path) =>
								path.isCallExpression() &&
								path.get('callee.object').node &&
								path.get('callee.object.name').node ===
									'feature' &&
								!path.parentPath.isLogicalExpression()
						);
					}
					if (path.get('name').node === 'test') {
						foundPath = path.findParent(
							(path) =>
								path.isCallExpression() &&
								path.get('callee').node &&
								path.get('callee.name').node === 'test' &&
								!path.parentPath.isLogicalExpression()
						);
					}
				}

				// Check if identifier is browser global
				if (
					[...browserGlobals, ...customGlobals].includes(
						path.get('name').node
					)
				) {
					const name = path.get('name').node;
					if (
						shouldHandleEnvironmentForPath(
							path,
							GLOBAL_REFERENCE_VARIABLE
						)
					) {
						// Modernizr.addTest('feature', ...);
						const addTestNode = path.findParent(
							(path) =>
								path.isCallExpression() &&
								path.get('callee.property').node &&
								path.get('callee.property.name').node ===
									'addTest'
						);
						// Var feature = ...;
						const variableAssignmentNode = path.findParent((path) =>
							path.isVariableDeclaration()
						);
						// Feature = ...;
						const reassignmentNode = path.findParent((path) =>
							path.isAssignmentExpression()
						);
						// ( ... ? ... : ... )
						const conditionalExpressionNode = path.findParent(
							(path) =>
								path.isConditionalExpression() &&
								path.get('test.left').node &&
								path.get('test.left.name').node !==
									GLOBAL_REFERENCE_VARIABLE.name
						);
						// Function (){}()
						const iifeNode = path.findParent(
							(path) =>
								path.isCallExpression() &&
								!path.parentPath.isLogicalExpression() &&
								path.get('callee').isFunctionExpression()
						);

						if (addTestNode) {
							foundPath = addTestNode.get('arguments')[1];
						}
						if (variableAssignmentNode) {
							foundPath = variableAssignmentNode
								.get('declarations')[0]
								.get('init');
						}
						if (reassignmentNode) {
							foundPath = reassignmentNode.get('right');
						}
						if (conditionalExpressionNode) {
							foundPath = conditionalExpressionNode;
						}
						if (iifeNode) {
							foundPath = iifeNode;
						}
					}
				}

				if (foundPath) {
					addGlobalReferenceCheck = true;
					const clone = t.cloneNode(foundPath.node);
					foundPath.replaceWith(
						t.logicalExpression(
							'&&',
							GLOBAL_REFERENCE_VARIABLE,
							clone
						)
					);
				}
			}
		}
	};
};

module.exports = babelPlugin;
