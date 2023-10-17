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
    return data
};


async function findOne() {
    const exampleCollection = dbConnection.db(MONGO_DB).collection('books');
    const data = await exampleCollection.findOne({ _id: 3 });
    console.log(data);
    return data
};


async function findWithProjection() {
    const exampleCollection = dbConnection.db(MONGO_DB).collection('books');
    //const projection = { title: 1 };
    const projection = { _id: 0, title: 1 };

    const cursor =  await exampleCollection.find().project(projection).toArray();
    console.log(cursor);
};


async function distict() {
    const collection = dbConnection.db(MONGO_DB).collection('books');
    const data = await collection.distinct("title");
    console.log(data);
}


async function ne() {
    const query = { location: { $ne: "Gyumri" } };

    const exampleCollection = dbConnection.db(MONGO_DB).collection('students');
    const data = await exampleCollection.distinct("location", query);
    console.log(data);

}


async function sort() {
    const sort = { _id: -1 };
    const exampleCollection = dbConnection.db(MONGO_DB).collection('books');
    const data = await exampleCollection.find({}).sort(sort).limit(3).toArray();    
}



(async () => {
    await establishConnection()
    await sort()
})()




// find
// findOne
// Distinct values
// distinct
// $ne
// $eq
// sort
//limit
//findWithProjection





