'use strict';

const path = require('path');

let config;

const isCI =
	typeof process.env.CI !== 'undefined' && process.env.CI !== 'false';
const isPR =
	typeof process.env.TRAVIS_PULL_REQUEST !== 'undefined' &&
	process.env.TRAVIS_PULL_REQUEST !== 'false';
const local = !isCI || (isCI && isPR);

const port = 0;

if (local) {
	config = {
		browsers: ['Chrome']
	};
} else {
	config = {
		hostname: 'bs-local.com',
		browserStack: {
			username: process.env.BROWSER_STACK_USERNAME,
			accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
			startTunnel: true,
			project: 'modernizr-esm',
			name: 'Automated (Karma)',
			build: 'Automated (Karma)'
		},
		customLaunchers: {
			'BS-Chrome': {
				base: 'BrowserStack',
				browser: 'Chrome',
				os: 'Windows',
				'os_version': '7',
				project: 'modernizr-esm',
				build: 'Automated (Karma)',
				name: 'Chrome'
			},
			'BS-Firefox': {
				base: 'BrowserStack',
				browser: 'Firefox',
				os: 'Windows',
				'os_version': '7',
				project: 'modernizr-esm',
				build: 'Automated (Karma)',
				name: 'Firefox'
			},
			'BS-IE11': {
				base: 'BrowserStack',
				browser: 'IE',
				'browser_version': '11',
				os: 'Windows',
				'os_version': '7',
				project: 'modernizr-esm',
				build: 'Automated (Karma)',
				name: 'IE11'
			}
		},
		browsers: ['BS-Chrome', 'BS-Firefox', 'BS-IE11']
	};
}

module.exports = function (baseConfig) {
	baseConfig.set(
		Object.assign(
			{
				basePath: '',
				frameworks: ['mocha'],
				files: ['test/**/.webpack.js'],
				exclude: [],
				preprocessors: {
					'test/**/.webpack.js': ['webpack', 'sourcemap']
				},
				reporters: ['mocha'],
				port: port,
				colors: true,
				logLevel: baseConfig.LOG_INFO,
				autoWatch: false,
				client: {
					mocha: {
						timeout: 20000
					},
					captureConsole: true
				},
				browserConsoleLogOptions: {
					level: 'log',
					format: '%b %T: %m',
					terminal: true
				},
				webpack: {
					mode: 'none',
					devtool: 'cheap-module-inline-source-map'
				},
				singleRun: true,
				concurrency: Infinity
			},
			config
		)
	);
};
