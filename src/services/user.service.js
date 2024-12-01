const { createUser } = require('../models/repositories/user.repository');

class UserService {
	static createUser = async ({ user_type, name, email }) => {
		return await createUser({ user_type, name, email });
	};
}

module.exports = UserService;
