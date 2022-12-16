const { Project } = require('../model/Project');
const Joi = require('joi');
const { ProjectValidation } = require('../middleware/ProjectValidation');
jwt = require('jsonwebtoken');
let jwtKey = 'set_your_jwt_key';

const findAllProject = async (req, res) => {
  Project.find()
      .exec(function (err, project) {
        if (err) {
          console.log(err);
          res.send('err');
        } else {
          res.send(project);
        }
      });
};

const addProject = async (req, res) => {
  const Header = req.headers['authorization'];
  if (typeof Header !== 'undefined') {
    jwt.verify(Header, jwtKey, (err, authData) => {
      const id = authData._id;
      Joi.validate(req.body, ProjectValidation, (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send(err.details[0].message);
        } else {
          let project;
          project = {
            ProjectTitle: req.body.ProjectTitle,
            ProjectURL: req.body.ProjectURL,
            ProjectDesc: req.body.ProjectDesc,
            Remark: req.body.Remark,
            CreatedBy: id
          };
          Project.create(project, function (err, project) {
            if (err) {
              console.log(err);
              res.send("error");
            } else {
              res.send(project);
              console.log("new project Saved");
            }
          });
          console.log(req.body);
        }
      });
    });
  }
};

const updateProject = async (req, res) => {
  Joi.validate(req.body, ProjectValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let updateProject;
      updateProject = {
        Remark: req.body.Remark
      };
      Project.findByIdAndUpdate(req.params.id, updateProject, function (
          err,
          Project
      ) {
        if (err) {
          res.send('error');
        } else {
          res.send(updateProject);
        }
      });
    }
    console.log('put');
    console.log(req.body);
  });
};

const updateProjectOfStudent = async (req, res) => {
  Joi.validate(req.body, ProjectValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let updateProject;
      updateProject = {
        ProjectTitle: req.body.ProjectTitle,
        ProjectURL: req.body.ProjectURL,
        ProjectDesc: req.body.ProjectDesc,
        Status: req.body.Status
      };
      Project.findByIdAndUpdate(req.params.id, updateProject, function (
          err,
          Project
      ) {
        if (err) {
          res.send('error');
        } else {
          res.send(updateProject);
        }
      });
    }
    console.log('put');
    console.log(req.body);
  });
};

const findOneByUserId = async (req, res) => {
  const Header = req.headers['authorization'];
  if (typeof Header !== 'undefined') {
    jwt.verify(Header, jwtKey, (err, authData) => {
      const id = authData._id;
      Project.findOne({
        CreatedBy: id
      }).exec(function (err, project) {
        if (err) {
          console.log(err);
          res.send('err');
        } else {
          res.send(project);
        }
      });
    });
  }
};

module.exports = {
  findAllProject,
  updateProject,
  addProject,
  findOneByUserId,
  updateProjectOfStudent
};
