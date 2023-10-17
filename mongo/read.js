const { MongoClient } = require('mongodb');

const MONGO_URI = "mongodb+srv://agbu:OhhwbrmP8iDsc7V2@cluster0.w5tklqg.mongodb.net/?retryWrites=true&w=majority/"
const MONGO_DB = 'university'

let mongoClient;
let dbConnection;

const establishConnection = async () => {
    try {
        if (!mongoClient) {
            mongoClient = new MongoClient(MONGO_URI);
            dbConnection = await mongoClient.connect();
        }
    } catch (err) {
        console.error('Connection error:', err.message);
        throw new Error('Failed to establish database connection.');
    }
};




async function find() {

    await establishConnection();
    const exampleCollection = dbConnection.db(MONGO_DB).collection('books');

    const data = await exampleCollection.find({}).toArray();
    console.log(data);
    return data
};

find()


async function findWithProjection() {
    await establishConnection();
    const exampleCollection = dbConnection.db(MONGO_DB).collection('students');
   // const projection = { name: 1 };
    const projection = { _id: 0, name: 1 };

    const cursor = exampleCollection.find().project(projection);
    for await (const doc of cursor) {
      console.dir(doc);
    }
};


async function distict() {
    await establishConnection();
    const exampleCollection = dbConnection.db(MONGO_DB).collection('students');
    const data = await exampleCollection.distinct("location");
    for (const doc of data) {
        console.log(doc);
    }
}


async function ne() {
    await establishConnection();
    const query = { location: { $ne: "Gyumri" } };

    const exampleCollection = dbConnection.db(MONGO_DB).collection('students');
    const data = await exampleCollection.distinct("location", query);
    console.log(data);

}


async function sort() {

    await establishConnection();
    const sort = { name:  -1};
    const exampleCollection = dbConnection.db(MONGO_DB).collection('students');
    const data = exampleCollection.find({}).sort(sort).limit(2);
    for await (const doc of data) {
        console.log(doc);
    }
}





// find
// findOne
// Distinct values
// distinct
// $ne
// $eq
// sort
//limit
//findWithProjection





