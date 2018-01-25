import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
	//hard coding to mimic a database
	//could replace this with a query to mongoDB
	res.json([
		{"id": 1, "firstName":"Bob", "lastName":"Nastanovich", "email":"bob@pavement.com"},
		{"id": 2, "firstName":"Stephen", "lastName":"Malkmus", "email":"Steve@pavement.com"},
		{"id": 3, "firstName":"Scott", "lastName":"Kannberg", "email":"scott@pavement.com"}
	]);
});

app.listen(port, function(err){
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:'+ port);
	}
});
