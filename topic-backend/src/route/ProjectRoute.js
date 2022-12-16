const express = require('express');
const route = express.Router();
const ProjectController = require('../controller/project.controller');
const { verifyAdmin, verifyEmployee } = require('../middleware/middleware');

route.get('/api/admin/project-bid', verifyAdmin, ProjectController.findAllProject);
route.put('/api/admin/project-bid/:id', verifyAdmin, ProjectController.updateProject);
route.put('/api/student/project-bid/:id', ProjectController.updateProjectOfStudent);
route.get('/api/student/project-bid',  ProjectController.findOneByUserId);
route.post('/api/student/project-bid', ProjectController.addProject);

module.exports = route;
