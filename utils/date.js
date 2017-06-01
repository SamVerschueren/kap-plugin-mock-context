'use strict';
const pad = n => n < 10 ? '0' + n : n;

module.exports = () => {
	const now = new Date();

	return `${now.getFullYear()}-${pad(now.getMonth())}-${pad(now.getDate())} at ${now.getHours()}.${pad(now.getMinutes())}.${pad(now.getSeconds())}`;
};
