const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Comment = new Schema(
    {
        id: {type: String},
        content: {type: String, required: true},
        topic_id: {type: String, required: true},
        user_id: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
Comment.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Comment', Comment);
