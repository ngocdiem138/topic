import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const GroupUser = new Schema(
    {
      user_id: { type: String, required: true },
      group_id: { type: String, required: true }
    },
    {
      timestamps: true
    }
);

mongoose.plugin(slug);
GroupUser.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('GroupUser', GroupUser);