const employees = require('./employees.js');
const employers = require('./employers.js');
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 8080;
const app = express();
const staticFiles = express.static(path.join(__dirname, '../../client/build'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use(express.static('public'));
// app.use(express.static('build'));
app.use(staticFiles)

app.get('/api/employees', (req, res) => {
	res.send(employees);
});

app.get('/api/employers', (req, res) => {
	res.send(employers);
});

// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname,'../public/index.html'));
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => console.log(`Employ{err} app server listening on port ${PORT}`));

// const router = express.Router()



// router.get('/api/cities', (req, res) => {
//   const cities = [
//     {name: 'New York City', population: 8175133},
//     {name: 'Los Angeles',   population: 3792621},
//     {name: 'Chicago',       population: 2695598}
//   ]
//   res.json(cities)
// })

// app.use(router)

// // any routes not picked up by the server api will be handled by the react router
// app.use('/*', staticFiles)

// app.set('port', (process.env.PORT || 3001))
// app.listen(app.get('port'), () => {
//   console.log(`Listening on ${app.get('port')}`)
// })
