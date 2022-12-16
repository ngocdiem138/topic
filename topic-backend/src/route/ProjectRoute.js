const express = require('express');
const route = express.Router();
const ProjectController = require('../controller/project.controller');
const { verifyTeacher } = require('../middleware/middleware');

route.get('/api/teacher/project-bid', verifyTeacher, ProjectController.findAllProject);
route.put('/api/teacher/project-bid/:id', verifyTeacher, ProjectController.updateProject);
route.put('/api/student/project-bid/:id', ProjectController.updateProjectOfStudent);
route.get('/api/student/project-bid', ProjectController.findOneByUserId);
route.post('/api/student/project-bid', ProjectController.addProject);

module.exports = route;
