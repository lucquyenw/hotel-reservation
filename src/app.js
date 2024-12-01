require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');

const { sequelize } = require('./dbs/init.postgre');

sequelize
	.sync({ force: true })
	.then(() => console.log('Synced db.'))
	.catch((err) => {
		console.log('failed to sync db: ' + err.message);
	});

const compression = require('compression');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

// init middle ware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// init router
app.use('', require('./routers'));

app.all('*', (req, res, next) => {
	const error = new Error('Not Found');
	error.statusCode = 404;
	next(error);
});

app.use(globalErrorHandler);

module.exports = app;
