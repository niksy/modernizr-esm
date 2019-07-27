const globby = require('globby');
const { modernizrDir, entryDependencies } = require('./util');
const mainEntryRollupConfig = require('./main-entry');
const sourceEntriesRollupConfig = require('./source-entries');
const featureEntriesRollupConfig = require('./feature-entries');

const config = async () => {
	const [ mainEntry, source, features ] = await Promise.all([
		globby([`${modernizrDir}/src/addTest.js`]),
		globby([
			`${modernizrDir}/src/**/*.js`,
			`!${modernizrDir}/src/{generate,slice,classes,${entryDependencies.join(',')}}.js`
		]),
		globby([
			`${modernizrDir}/feature-detects/${
				process.env.TEST ?
					'{emoji,flash,css/cssgrid,css/filters,audio/autoplay,indexeddb}' :
					'**/*'
			}.js`
		])
	]);
	const mainEntryConfig = mainEntry.map((file) => {
		const filePath = file.split('');
		return mainEntryRollupConfig(process.cwd(), file);
	});

	const sourceConfig = source.map((file) => {
		const [ , filePath ] = file.split('src/');
		return sourceEntriesRollupConfig(process.cwd(), file, filePath);
	});

	const featuresConfig = features.map((file) => {
		const [ , filePath ] = file.split('feature-detects/');
		return featureEntriesRollupConfig(process.cwd(), file, filePath);
	});

	return [ ...mainEntryConfig, ...sourceConfig, ...featuresConfig ];
};

module.exports = config();
