const employees = require('./employees.js');
const employers = require('./employers.js');
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 8080;
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(express.static(path.join(__dirname, '../../client/build')));

// app.use(staticFiles)

app.get('/api/employees', (req, res) => {
	res.send(employees);
});

app.get('/api/employers', (req, res) => {
	res.send(employers);
});

// any routes not picked up by the server api will be handled by the react router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
