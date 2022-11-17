import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const Role = new Schema(
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      description: { type: String, required: true }
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