const username = 'topic-username';
const password = '760BDBTDq442IS5h';
const database_name = 'sample_geospatial';

const environment = {
  database: {
    mongo: {
      url: `mongodb+srv://${username}:${password}@cluster.x5c8txn.mongodb.net/?retryWrites=true&w=majority`,
      name: database_name
    },
    collections: {
      comment: 'comment',
      evaluate: 'evaluate',
      group: 'group',
      group_user: 'group_user',
      reaction: 'reaction',
      role: 'role',
      topic: 'topic',
      user: 'user'
    }
  }
};

module.exports = environment;