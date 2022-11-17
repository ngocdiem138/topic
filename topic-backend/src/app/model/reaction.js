import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const Reaction = new Schema(
    {
      id: { type: String, required: true },
      type: { type: String, required: true },
      topic_id: { type: String, required: true },
      user_id: { type: String, required: true }
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
