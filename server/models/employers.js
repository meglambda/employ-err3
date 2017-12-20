const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployersSchema = new Schema({

	linkInId: {
		type: Number,
		unique: true
	},
	displayName: String,
	image: String,
	title: String,
	bio: String,
	email: String,
	website: String,
	matches: [String],
	connections: [String],
	denied: [String]
});

const Employers = mongoose.model('employers', EmployersSchema);

module.exports = Employers;
