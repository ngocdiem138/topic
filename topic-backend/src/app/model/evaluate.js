const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Evaluate = new Schema(
    {
        id: {type: String},
        description: {type: String, required: true},
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
Evaluate.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Evaluate', Evaluate);
