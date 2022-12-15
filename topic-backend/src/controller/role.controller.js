const Joi = require('joi')
const {Role} = require('../model/Role');
const {Employee} = require('../model/Employee')
const {RoleValidation} = require('../middleware/RoleValidation');

export const findAll = async (req, res) => {
    Role.find()
        .populate('company')
        .exec(function (err, role) {
            res.send(role);
        });
}
export const addRole = async (req, res) => {
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
}

export const updateRole = async (req, res) => {
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

}
export const deleteRole = async (req, res) => {
    Employee.find({role: req.params.id}, function (err, r) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            if (r.length === 0) {
                Role.findByIdAndRemove({_id: req.params.id}, function (err, role) {
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
}

