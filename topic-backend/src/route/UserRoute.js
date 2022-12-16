const express = require('express');
const route = express.Router();
const { verifyAdmin, verifyAdminStudent, verifyStudent } = require('../middleware/Middleware');

const UserController = require('../controller/user.controller');

route.get('/api/student', verifyAdmin, UserController.findAllUser);
route.post('/api/student', verifyAdmin, UserController.addUser);
route.put('/api/student/:id', verifyAdmin, UserController.updateUser);
route.delete('/api/student/:id', verifyAdmin, UserController.deleteUser);

route.get('/api/personal-info/:id', verifyAdminStudent, UserController.findOneStudent);
route.put('/api/personal-info/:id', verifyStudent, UserController.updateOneStudent);


module.exports = route;
