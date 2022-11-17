const database = require('../../config/database/mongodb');
const collections = require('../../config/database/environment').database.collections;
const mongoose = require('mongoose');

export class UserService {

  authentication(username, password) {
    return database
        .connect(collections.user)
        .then(USERs => {
          return USERs.findOne({
            username,
            password
          });
        })
        .finally(() => {
          database.disconnect();
        });
  }

  getUser(id) {
    database
        .connect(collections.user)
        .then(USERs => {
          return USERs.findOne(new mongoose.mongo.ObjectId(id));
        })
        .finally(() => {
          database.disconnect();
        });
  }

  getUsers() {

  }

}