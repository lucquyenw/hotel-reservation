const userModel = require('../use.model');

const createUser = async ({ user_type, name, email }) => {
	return await userModel.create({ user_type, name, email });
};
module.exports = {
	createUser,
};
