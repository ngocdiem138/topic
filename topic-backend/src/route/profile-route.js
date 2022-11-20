const express = require('express');
const loginController = require('../app/controller/login-controller.js')

const router = express.Router();

router.get('/login', loginController.login);

module.exports = router;