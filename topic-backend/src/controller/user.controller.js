const Joi = require('joi');
const { Student } = require('../model/Student');
const {
  StudentValidation,
  StudentValidationUpdate,
  StudentPersonalInfoValidation
} = require('../middleware/StudentValidation');


const findAllUser = async (req, res) => {
  Student.find()
      .exec(function (err, student) {
        res.send(student);
      });
};

const addUser = async (req, res) => {
  Joi.validate(req.body, StudentValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newStudent;
      newStudent = {
        Email: req.body.Email,
        Password: req.body.Password,
        Account: req.body.Account,
        Gender: req.body.Gender,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        ContactNo: req.body.ContactNo,
        StudentCode: req.body.StudentCode,
        Education: {}
      };

      Student.create(newStudent, function (err, student) {
        if (err) {
          console.log(err);
          res.send('error');
        } else {
          res.send(student);
          console.log('new student Saved');
        }
      });
      console.log(req.body);
    }
  });
};

const updateUser = async (req, res) => {
  Joi.validate(req.body, StudentValidationUpdate, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newStudent;
      newStudent = {
        Email: req.body.Email,
        // Password: req.body.Password,
        Account: req.body.Account,
        Gender: req.body.Gender,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        ContactNo: req.body.ContactNo,
        StudentCode: req.body.StudentCode
      };
      Student.findByIdAndUpdate(req.params.id, newStudent, function (
          err,
          student
      ) {
        if (err) {
          res.send('error');
        } else {
          res.send(newStudent);
        }
      });
    }
    console.log('put');
    console.log(req.body);
  });
};

const deleteUser = async (req, res) => {
  Student.findByIdAndRemove({ _id: req.params.id }, function (err, student) {
    if (!err) {
      console.log('state deleted');
      res.send(student);
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
  Student.findById(req.params.id)
      .exec(function (err, student) {
        res.send(student);
      });
};

const updateOneStudent = async (req, res) => {
  Joi.validate(req.body, StudentPersonalInfoValidation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.details[0].message);
    } else {
      let newStudent;
      newStudent = {
        ContactNo: req.body.ContactNo,
        DOB: req.body.DOB,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Hobbies: req.body.Hobbies,
        PermanetAddress: req.body.PermanetAddress,
        PresentAddress: req.body.PresentAddress
      };
      Student.findByIdAndUpdate(
          req.params.id,
          {
            $set: newStudent
          },
          function (err, numberAffected) {
            console.log(numberAffected);
            res.send(newStudent);
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

