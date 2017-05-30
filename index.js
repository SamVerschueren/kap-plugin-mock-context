'use strict';
const path = require('path');
const clipboardy = require('clipboardy');
const Conf = require('conf');
const got = require('got');

const pad = n => n < 10 ? '0' + n : n;

const date = () => {
	const now = new Date();

	return `${now.getFullYear()}-${pad(now.getMonth())}-${pad(now.getDate())} at ${now.getHours()}.${pad(now.getMinutes())}.${pad(now.getSeconds())}`;
};

module.exports = opts => {
	opts = Object.assign({
		config: {}
	}, opts);

	if (typeof opts.file !== 'string') {
		throw new TypeError(`Expected \`file\` to be of type \`string\`, got \`${typeof opts.file}\``);
	}

	const config = new Conf();
	config.clear();
	config.set(opts.config);

	const format = path.extname(opts.file).slice(1);

	return {
		format,
		defaultFileName: `Kapture ${date()}.${format}`,
		filePath: () => Promise.resolve(opts.file),
		config,
		request: got,
		notify: text => { },						// eslint-disable-line no-unused-vars
		copyToClipboard: text => {
			clipboardy.writeSync(text);
		},
		setProgress: (text, percentage) => { },		// eslint-disable-line no-unused-vars
		openConfigFile: () => { },
		cancel: () => { }
	};
};
