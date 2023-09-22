const { MongoClient } = require('mongodb');

//const url = 'mongodb+srv://agbu:OhhwbrmP8iDsc7V2@cluster0.w5tklqg.mongodb.net/todo';
const url = 'mongodb://localhost:27017'

MongoClient.connect(url)
  .then(client => {
    console.log('Connected to MongoDB');

    const db = client.db('todo');
    const collection = db.collection('users');

    // return collection.insertOne({"name":"hello",'age':16});

    return collection.find({}).toArray()
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error:', err);
  });
