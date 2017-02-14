'use strict';

let ts = require('ts-node');

module.exports = {
	onPrepare (config) {
		ts.register();
	},

	onComplete () {
		if (this.process) {
			this.process.kill();
		}
	}
};
