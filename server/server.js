import mongoose from 'mongoose';
import routes from './routes/apiRoutes';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const db  = mongoose.connection;
const app = express();
const PORT = process.env.PORT || 8080;
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

// DATABASE configuration for MONGOOSE 
const databaseUri = 'mongodb://localhost/employer';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
} else {
	mongoose.connect(databaseUri);
}


db.on('error', (err) => console.log('Mongoose Error: ', err));
db.once('open', () => console.log('Mongoose connection successful'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(staticFiles);

app.use('/', routes);
// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);


mongoose.connect('mongodb://localhost/employer');

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));




