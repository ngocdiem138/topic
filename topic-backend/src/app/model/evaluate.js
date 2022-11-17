import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const Evaluate = new Schema(
    {
      id: { type: String, required: true },
      description: { type: String, required: true },
      topic_id: { type: String, required: true },
      user_id: { type: String, required: true }
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
