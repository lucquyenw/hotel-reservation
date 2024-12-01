'use strict';

const express = require('express');
const userController = require('../../controllers/user.controller');
const asyncErrorHandler = require('../../utils/asyncErrorHandler');

const router = express.Router();

router.post('/', asyncErrorHandler(userController.createUser));

module.exports = router;
