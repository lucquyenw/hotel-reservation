const dbInstance = require('../dbs/init.postgre');
const Sequelize = require('sequelize');

const USER_TYPE_ENUMS = {
	MANAGER: '0001',
	EMPLOYEE: '0002',
	CLIENT: '00003',
	ADMIN: '00004',
};

const userModel = dbInstance.sequelize.define(
	'users',
	{
		user_id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.DataTypes.UUIDV4,
		},
		user_type: {
			type: Sequelize.ENUM,
			values: [
				USER_TYPE_ENUMS.ADMIN,
				USER_TYPE_ENUMS.MANAGER,
				USER_TYPE_ENUMS.EMPLOYEE,
				USER_TYPE_ENUMS.CLIENT,
			],
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING(30),
			allowNull: false,
		},
	},
	{
		modelName: 'users',
		timestamps: true,
	}
);

module.exports = userModel;
