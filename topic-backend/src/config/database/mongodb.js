const { MongoClient, ServerApiVersion } = require('mongodb');
const environment = require('../database/environment');

const client = new MongoClient(environment.database.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

function validateCollection(collection) {
  if (!Object.values(environment.database.collections).includes(collection)) {
    throw new Error('Collection is invalid, please provide a valid collection');
  }
}

function connect(collection) {
  return new Promise(() => {
    // validateCollection(collection);
    client.connect((error) => {
      if (error) throw error;
      console.debug('Connected to database with collection:', collection);
      return client.db(environment.database.mongo.name).collection(collection);
    });
  });
}

function disconnect() {
  client.close().then(() => console.debug('Closed connection'));
}

module.exports = {
  connect, disconnect
};