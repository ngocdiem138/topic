const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Evaluate = new Schema(
    {
        id: {type: String},
        description: {type: String, required: true},
        topic_id: {type: String, required: true},
        user_id: {type: String, required: true}
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
