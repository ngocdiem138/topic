const Joi = require('joi');
const { Employee } = require('../model/Employee');
const {
  EmployeeValidation,
  EmployeeValidationUpdate,
  EmployeePersonalInfoValidation
} = require('../middleware/EmployeeValidation');


const findAllUser = async (req, res) => {
  Employee.find()
      .exec(function (err, employee) {
        res.send(employee);
      });
};

const addUser = async (req, res) => {
  Joi.validate(req.body, EmployeeValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newEmployee;
      newEmployee = {
        Email: req.body.Email,
        Password: req.body.Password,
        role: req.body.RoleID,
        Account: req.body.Account,
        Gender: req.body.Gender,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        ContactNo: req.body.ContactNo,
        EmployeeCode: req.body.EmployeeCode,
        Education: {}
      };

      Employee.create(newEmployee, function (err, employee) {
        if (err) {
          console.log(err);
          res.send('error');
        } else {
          res.send(employee);
          console.log('new employee Saved');
        }
      });
      console.log(req.body);
    }
  });
};

const updateUser = async (req, res) => {
  Joi.validate(req.body, EmployeeValidationUpdate, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newEmployee;
      newEmployee = {
        Email: req.body.Email,
        // Password: req.body.Password,
        Account: req.body.Account,
        role: req.body.RoleID,
        Gender: req.body.Gender,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        ContactNo: req.body.ContactNo,
        EmployeeCode: req.body.EmployeeCode
      };
      Employee.findByIdAndUpdate(req.params.id, newEmployee, function (
          err,
          employee
      ) {
        if (err) {
          res.send('error');
        } else {
          res.send(newEmployee);
        }
      });
    }
    console.log('put');
    console.log(req.body);
  });
};

const deleteUser = async (req, res) => {
  Employee.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
    if (!err) {
      console.log(' state deleted');
      res.send(employee);
    } else {
      console.log(err);
      res.send('error');
    }
  });
  // res.send("error");
  console.log('delete');
  console.log(req.params.id);
};

const findOneStudent = async (req, res) => {
  console.log('personal-info', req.params.id);
  Employee.findById(req.params.id)
      .exec(function (err, employee) {
        res.send(employee);
      });
};

const updateOneStudent = async (req, res) => {
  Joi.validate(req.body, EmployeePersonalInfoValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newEmployee;
      newEmployee = {
        ContactNo: req.body.ContactNo,
        DOB: req.body.DOB,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Hobbies: req.body.Hobbies,
        PermanetAddress: req.body.PermanetAddress,
        PresentAddress: req.body.PresentAddress
      };
      Employee.findByIdAndUpdate(
          req.params.id,
          {
            $set: newEmployee
          },
          function (err, numberAffected) {
            console.log(numberAffected);
            res.send(newEmployee);
          }
      );
    }
    console.log('put');
    console.log(req.body);
  });
};

module.exports = {
  updateOneStudent,
  findOneStudent,
  updateUser,
  deleteUser,
  addUser,
  findAllUser

};

