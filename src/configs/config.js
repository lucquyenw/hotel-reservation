const dev = {
	app: {
		port: process.env.DEV_PORT,
	},
	db: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		db: process.env.DB_NAME,
		dialect: process.env.DB_DIALECT,
		pool: {
			max: +process.env.DB_POOL_MAX,
			min: +process.env.DB_POOL_MIN,
			accquire: +process.env.DB_POOL_ACCQUIRE,
			idle: +process.env.DB_POOL_IDLE,
		},
	},
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
