const mongodb = require('mongodb');
require('dotenv').config()

const MongoClient = mongodb.MongoClient;

let _db;
const username = 'topic-username';
const password = '760BDBTDq442IS5h';
const database_name = 'sample_geospatial';


const mongoUrl = "mongodb+srv://nachiluong:trungmika2001@cluster0.bkxlluj.mongodb.net/?retryWrites=true&w=majority";

exports.initDb = async cb => {
	if (_db) return cb(null, _db);

	try {
		const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
		_db = client.db();
		cb(null, client);
	} catch (error) {
		cb(error, null);
	}
};

exports.getDb = () => {
	if (!_db) throw 'Not Connected...';

	return _db;
};
