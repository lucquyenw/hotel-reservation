const dev = {
	app: {
		port: process.env.DEV_PORT,
	},
	db: {},
};

const pro = {
	app: {
		port: process.env.PRO_PORT,
	},
};

const config = {
	dev,
	pro,
};

const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];
