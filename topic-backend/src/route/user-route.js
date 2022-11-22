const express = require('express')

const userController = require('../app/controller/user-controller.js')
const router = express.Router();
//http://localhost:5000/user

router.get('/', userController.getUsers);
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser);

module.exports = router;