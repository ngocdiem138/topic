import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const Topic = new Schema(
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      start_date: { type: Date, required: true },
      end_date: { type: Date, required: true },
      instructor_id: { type: String, required: true },
      group_responsibility_id: { type: String, required: true },
      group_evaluate_id: { type: String, required: true }
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

module.exports = mongoose.model('Comment', Topic);
