const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Role = new Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        description: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
Role.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Role', Role);