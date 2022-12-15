const express = require('express'),
    mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Joi = require('joi'),
    app = express();
jwt = require('jsonwebtoken');
require('dotenv').config();
const { Role } = require('../model/Role');
const { verifyAdminHR } = require('../middleware/Middleware');
const { RoleValidation } = require('../middleware/RoleValidation');

//connecting to mongodb
let mongoURI = process.env.DATABASEURL;
//setting up jwt token
let jwtKey = process.env.JWTKEY;

app.get('/api/role', verifyAdminHR, (req, res) => {
  Role.find()
      .populate('company')
      .exec(function (err, role) {
        res.send(role);
      });
});

app.post('/api/role', verifyAdminHR, (req, res) => {
  Joi.validate(req.body, RoleValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newRole;

      newRole = {
        RoleName: req.body.RoleName,
        company: req.body.CompanyID
      };

      Role.create(newRole, function (err, role) {
        if (err) {
          console.log(err);
          res.send('error');
        } else {
          res.send(role);
          console.log('new Role Saved');
        }
      });
      // }
      console.log(req.body);
    }
  });
});

app.put('/api/role/:id', verifyAdminHR, (req, res) => {
  Joi.validate(req.body, RoleValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let updateRole;

      updateRole = {
        RoleName: req.body.RoleName,
        company: req.body.CompanyID
      };

      Role.findByIdAndUpdate(req.params.id, updateRole, function (err, role) {
        if (err) {
          res.send('error');
        } else {
          res.send(updateRole);
        }
      });
    }

    console.log('put');
    console.log(req.body);
  });
});
app.delete('/api/role/:id', verifyAdminHR, (req, res) => {
  Employee.find({ role: req.params.id }, function (err, r) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      if (r.length === 0) {
        Role.findByIdAndRemove({ _id: req.params.id }, function (err, role) {
          if (!err) {
            console.log(' Role deleted');
            res.send(role);
          } else {
            console.log('error');
            res.send('err');
          }
        });
        console.log('delete');
        console.log(req.params.id);
      } else {
        res
            .status(403)
            .send(
                'This role is associated with Employee so you can not delete this'
            );
      }
    }
  });
});
