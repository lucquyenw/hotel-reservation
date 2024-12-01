require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
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

app.all('*', (req, res, next) => {
	const error = new Error('Not Found');
	error.statusCode = 404;
	next(error);
});

app.use(globalErrorHandler);

module.exports = app;
