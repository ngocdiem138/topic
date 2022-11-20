const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Topic = new Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        start_date: {type: Date, required: true},
        end_date: {type: Date, required: true},
        instructor_id: {type: String, required: true},
        group_responsibility_id: {type: String, required: true},
        group_evaluate_id: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
Topic.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Topic', Topic);
