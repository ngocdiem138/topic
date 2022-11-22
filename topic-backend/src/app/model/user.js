const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const User = new Schema(
    {
        id: {type: String},
        // student_id: {type: String},
        email: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
        gender: {type: String},
        dob: {type: String},
        address: {type: String},
        roleId: {
            type: Schema.Types.ObjectId,
            ref: 'Role',
        },
    },
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('User', User);