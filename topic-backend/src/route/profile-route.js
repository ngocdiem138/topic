const express = require('express');
const profileController = require('../app/controller/profile-controller')

const router = express.Router();

router.get('/login', loginController.login);

module.exports = router;