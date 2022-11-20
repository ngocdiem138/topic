const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Reaction = new Schema(
    {
        id: {type: String},
        type: {type: String, required: true},
        topic_id: {type: String, required: true},
        user_id: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
Reaction.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Reaction', Reaction);
