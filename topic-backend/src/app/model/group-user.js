const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const GroupUser = new Schema(
    {
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

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