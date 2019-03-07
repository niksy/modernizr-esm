const path = require('path');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');
const t = require('@babel/types');
const amd = require('rollup-plugin-amd');
const { modernizrDir, version } = require('./util');
const handleGlobalReference = require('./handle-global-reference');

const babelPlugin = () => {

	return {
		visitor: {
			MemberExpression (path) {
				// Replace all `Modernizr._config` references to their default values
				if (path.get('property.name').node === '_config') {
					path.parentPath.replaceWith(t.booleanLiteral(path.parentPath.get('property.name').node !==
								'classPrefix'));
				}
			}
		}
	};
};

const rollupPlugins = [
	amd({
		rewire (moduleId, parentPath) {
			if (
				moduleId.includes('Modernizr') ||
				moduleId.includes('ModernizrProto') ||
				moduleId.includes('addTest')
			) {
				return `./Modernizr.js`;
			}
			return path.resolve(modernizrDir, `src/${moduleId}.js`);
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
			return `/** Original source code: https://github.com/Modernizr/Modernizr/blob/v${version}/src/${
				options.fileName
			} **/\n${result.code}`;
		}
	}
];

const rollupConfig = (dist, file, filePath) => ({
	input: file,
	output: {
		dir: path.resolve(dist, 'src'),
		entryFileNames: filePath,
		format: 'esm'
	},
	plugins: rollupPlugins,
	external: (id) => true
});

module.exports = rollupConfig;
