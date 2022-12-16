const express = require('express');
const route = express.Router();
const RoleController = require('../controller/role.controller.js');
const { verifyTeacherAdmin } = require('../middleware/Middleware');

route.get('/api/role', verifyTeacherAdmin, RoleController.findAll);
route.post('/api/role', verifyTeacherAdmin, RoleController.addRole);
route.put('/api/role/:id', verifyTeacherAdmin, RoleController.updateRole);
route.delete('/api/role/:id', verifyTeacherAdmin, RoleController.deleteRole);


module.exports = route;
