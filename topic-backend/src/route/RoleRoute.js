const express = require('express')
const route = express.Router();
const RoleController = require('../controller/role.controller.js')
const { verifyAdminHR } = require('../middleware/Middleware');

route.get("/api/role",verifyAdminHR, RoleController.findAll)
route.post("/api/role",verifyAdminHR, RoleController.addRole)
route.put("/api/role/:id",verifyAdminHR, RoleController.updateRole)
route.delete("/api/role/:id",verifyAdminHR, RoleController.deleteRole)


module.exports = route