const User = require('../model/user.js')

class UserController {
    getUsers(req, res, next) {
        try {
            const user = new User({
                name: "test",
                email: "test",
                password: "test",
                gender: "nam",
                dob: " 20/12/2001",
                address: "484 Le Van Viet",
                role_id: "student"
            })
            user.save();
            // const users =  User.find();
            // res.status(200).json(users);
        } catch (err) {
            console.log("THem sai roi", err)
            // res.status(500).json({error: err});
        }
    };

    create(req, res, next) {

    }

    update(req, res, next) {

    }

    delete(req, res, next) {

    }
}

module.exports = new UserController();