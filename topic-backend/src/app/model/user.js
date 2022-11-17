import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const User = new Schema(
    {
      id: { type: String, required: true },
      student_id: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      name: { type: String, required: true },
      gender: { type: String },
      dob: { type: String },
      address: { type: String },
      role_id: { type: String, required: true }
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