const express = require('express')
const route = express.Router();
const LoginController = require('../controller/login.controller.js')

route.post("/api/login", LoginController.login)


module.exports = route