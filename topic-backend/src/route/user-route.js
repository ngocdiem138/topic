const express = require('express')
// import { getUsers} from '../app/controller/user-controller.js';
// const {getUsers} = require('../app/controller/user-controller.js')
const userController = require('../app/controller/user-controller.js')
const router = express.Router();
//http://localhost:5000/posts

// router.get('/', getUsers);
router.get('/', userController.getUsers);

module.exports = router;