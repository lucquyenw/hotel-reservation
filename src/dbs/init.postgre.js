const { Sequelize } = require('sequelize');
const { db } = require('../configs/config');

class Database {
	constructor() {
		this.connect();
	}

	connect(type = 'postgre') {
		this.sequelize = new Sequelize(db.db, db.user, db.password, {
			host: db.host,
			dialect: db.dialect,
			operatorAliases: false,
			pool: {
				max: db.pool.max,
				min: db.pool.min,
				acquire: db.pool.acquire,
				idle: db.pool.idle,
			},
		});
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}

const dbInstance = Database.getInstance();

module.exports = dbInstance;
