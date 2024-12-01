'use strict';

const express = require('express');

const router = express.Router();

//check client is authorized and check do the client app has permisison to call API

router.use('/v1/api/user', require('./user'));

module.exports = router;
