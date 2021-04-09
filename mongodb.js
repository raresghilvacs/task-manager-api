const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;

const databaseName = 'task-manager';

MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect!', error);
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Rares',
        age: 26
    });
});