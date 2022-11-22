const config = require("../../config/auth/ auth.config");
const db = require("../model/index");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }
            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            const token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            const authorities = [];
            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user._id,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });
};