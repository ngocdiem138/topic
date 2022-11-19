const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const User = new Schema(
    {
      id: { type: String},
      // student_id: { type: String, required: true },
      email: { type: String, required: true },
      // password: { type: String, required: true },
      name: { type: String, required: true },
      // gender: { type: String },
      // dob: { type: String },
      // address: { type: String },
      // role_id: { type: String, required: true }
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