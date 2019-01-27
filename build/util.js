const path = require('path');

const modernizrDir = path.resolve(
	path.dirname(require.resolve('modernizr')),
	'../'
);

const { version } = require(path.resolve(modernizrDir, 'package.json'));

const entryDependencies = [
	'Modernizr',
	'ModernizrProto',
	'addTest',
	'hasOwnProp',
	'testRunner',
	'tests'
];

module.exports.version = version;
module.exports.modernizrDir = modernizrDir;
module.exports.entryDependencies = entryDependencies;
