'use strict';
const path = require('path');
const got = require('got');
const date = require('./utils/date');
const MockConf = require('./utils/mock-conf');

module.exports = opts => {
	opts = Object.assign({
		config: {}
	}, opts);

	if (typeof opts.file !== 'string') {
		throw new TypeError(`Expected \`file\` to be of type \`string\`, got \`${typeof opts.file}\``);
	}

	const config = new MockConf();
	config.set(opts.config);

	const format = path.extname(opts.file).slice(1);

	return {
		format,
		defaultFileName: `Kapture ${date()}.${format}`,
		filePath: () => Promise.resolve(opts.file),
		config,
		request: got,
		notify: text => { },						// eslint-disable-line no-unused-vars
		copyToClipboard: text => { },				// eslint-disable-line no-unused-vars
		setProgress: (text, percentage) => { },		// eslint-disable-line no-unused-vars
		openConfigFile: () => { },
		cancel: () => { }
	};
};
