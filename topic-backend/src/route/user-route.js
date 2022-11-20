const express = require('express')

const userController = require('../app/controller/user-controller.js')
const router = express.Router();
//http://localhost:5000/user

router.get('/', userController.getUsers);

module.exports = router;