const express = require('express');
const route = express.Router();
const EducationController = require('../controller/education.controller');
const { verifyEmployee, verifyHREmployee, verifyHR } = require('../middleware/middleware');

route.get('/api/student/education', verifyEmployee, EducationController.findOneByUserId);
route.get('/api/student/education/:id', verifyHR, EducationController.findById);
route.put('/api/student/education/:id', verifyHREmployee, EducationController.updateEducation);

module.exports = route;
