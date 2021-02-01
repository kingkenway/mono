const mongoose = require('mongoose');

// Create Schema
const monoSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, 'User ID. required']
	},
	monoId: {
		type: String,
	},
	monoCode: {
		type: String,
		// required: [true, 'Mono code. required']
	},
});

const Mono = mongoose.model('mono', monoSchema);

module.exports = Mono;