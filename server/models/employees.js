const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeesSchema = new Schema({

	linkInId: {
		type: Number,
		unique: true
	},
	displayName: String,
	image: String,
	title: String,
	bio: String,
	email: Number,
	searchable: Boolean,
	skills: [String],
	matches: [String],
	connections: [String],
	denied: [String]
});

const Employees = mongoose.model('employees', EmployeesSchema);

module.exports = Employees;
