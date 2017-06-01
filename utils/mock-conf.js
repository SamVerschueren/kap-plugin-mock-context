'use strict';
const Conf = require('conf');

module.exports = class extends Conf {
	constructor() {
		super();
		this.s = Object.create(null);
	}

	get store() {
		return this.s;
	}

	set store(val) {
		this.s = val;
	}
};
