const User = require('../model/user.js')
const {multipleMongooseToObject} = require('../../util/mongoose')


const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        // multipleMongooseToObject(users);
        res.status(200).send(users);
    } catch (err) {
        console.log("Lay ra loi roi roi", err)
        res.status(500).send({error: err});
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            dob: req.body.dob,
            address: req.body.address,
            roleId: req.body.roleId
        })
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        console.log("THem sai roi", err)
        res.status(500).send({error: err});
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        // console.log(id)
        await User.deleteOne({_id: id});
        res.status(200).send();
    } catch (err) {
        console.log("Xoa sai roi", err)
        res.status(500).send({error: err});
    }
}

const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        await User.updateOne({_id: id}, {
            $set: req.body
        })
        res.status(200).send();
    } catch (err) {
        console.log("Cap nhat sai roi", err)
        res.status(500).send({error: err});
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
};