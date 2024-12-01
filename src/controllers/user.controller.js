const UserService = require('../services/user.service');

class UserController {
	createUser = async (req, res, next) => {
		return res.status(200).json({
			msg: 'create user success',
			metadata: await UserService.createUser(req.body),
		});
	};
}

module.exports = new UserController();
