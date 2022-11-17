const express = require('express');
const loginController = require('../app/controller/login-controller');

const router = express.Router();

/**
 * @method: GET
 * @Request: {
 *  username: string,
 *  password: string,
 *  role: string
 * }
 * @Response: {
 *   username: string,
 *   password: string,
 *   role: string
 * }
 * @Description: Login
 */
router.get('/login', loginController.login);

module.exports = router;