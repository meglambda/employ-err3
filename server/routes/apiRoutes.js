import express from 'express';
import Employees from '../models/employees.js';
import Employers from '../models/employers.js';

const router = express.Router();


// return all employees from database
router.get('/api/employees', (req, res) => {
	Employees.find({})
		.then((results) => {
			res.send(results);
		})
		.catch((err) => { 
			console.log(err.message);
			res.status(500).send(err.message ? err.message : "Internal server blowup");
		})
});

// return all employers from database
router.get('/api/employers', (req, res) => {
	Employers.find({})
		.then((results) => {
			res.send(results);
		})
		.catch((err) => { 
			console.log(err.message);
			res.status(500).send(err.message ? err.message : "Internal server blowup");
		})
});


module.exports = router;