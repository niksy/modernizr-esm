const path = require('path');

const modernizrDirectory = path.resolve(
	path.dirname(require.resolve('modernizr')),
	'../'
);

const { version } = require(path.resolve(modernizrDirectory, 'package.json'));

const entryDependencies = [
	'Modernizr',
	'ModernizrProto',
	'addTest',
	'hasOwnProp',
	'testRunner',
	'tests'
];

module.exports.version = version;
module.exports.modernizrDir = modernizrDirectory;
module.exports.entryDependencies = entryDependencies;
