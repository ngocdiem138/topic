const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const GroupUser = new Schema(
    {
        user_id: {type: String, required: true},
        group_id: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
GroupUser.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('GroupUser', GroupUser);