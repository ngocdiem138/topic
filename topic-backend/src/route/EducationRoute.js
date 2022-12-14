const express = require('express');
const route = express.Router();
const EducationController = require('../controller/education.controller');

route.get('/api/student/education', EducationController.findOneByUserId);
route.get('/api/student/education/:id', EducationController.findById);
route.put('/api/student/education/:id', EducationController.updateEducation);

module.exports = route;
