const express = require('express')
const route = express.Router();
const { verifyHR, verifyHREmployee, verifyEmployee } = require('../middleware/Middleware');

const UserController = require('../controller/user.controller')

route.get("/api/employee",verifyHR, UserController.findAllUser)
route.post("/api/employee",verifyHR, UserController.addUser)
route.put("/api/employee/:id",verifyHR, UserController.updateUser)
route.delete("/api/employee/:id",verifyHR, UserController.deleteUser)

route.get("/api/personal-info/:id",verifyHREmployee, UserController.findOneStudent)
route.put("/api/personal-info/:id",verifyEmployee, UserController.updateOneStudent)




module.exports = route