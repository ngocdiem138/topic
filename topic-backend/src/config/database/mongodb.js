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
  mongoose
      .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
}

function disconnect() {
  client.close().then(() => console.debug('Closed connection'));
}

module.exports = {
  connect, disconnect
};