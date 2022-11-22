const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Reaction = new Schema(
    {
        id: {type: String},
        type: {type: String, required: true},
        topicId: {
            type: Schema.Types.ObjectId,
            ref: 'Topic',
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
Reaction.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Reaction', Reaction);
