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



async function insertStudents() {
    await establishConnection();
    const exampleCollection = dbConnection.db(MONGO_DB).collection('students');
    await exampleCollection.insertMany([
        { "_id": 1, "name": "Anna Baroyan", "location": "Yerevan", "age": "40" },
        { "_id": 2, "name": "Karine Karapetyan", "location": "Gyumri", "age": "35" },
        { "_id": 3, "name": "Ani Minasyan", "localtion": "Gyumri", "age": "33" },
        { "_id": 4, "name": "Arman Atoyan", "location": "Aparan", "age": "25" },
        { "_id": 5, "name": "Arthur Nahapetyan", "location": "Aparan", "age": "25" },
        { "_id": 6, "name": "Anna Pahlevanyan", "location": "Yerevan", "age": "23" },
    ]);
}


async function insertBooks() {
    await establishConnection();
    const exampleCollection = dbConnection.db(MONGO_DB).collection('books');
    await exampleCollection.insertMany([
        { "_id": 2, "title": "Les Misérables", "author": "Hugo", "length": 1462 },
        { "_id": 4, "title": "Infinite Jest", "author": "Wallace", "length": 1104 },
        { "_id": 6, "title": "A Dance with Dragons", "author": "Martin", "length": 1104 },
        { "_id": 3, "title": "Atlas Shrugged", "author": "Rand", "length": 1088 },
        { "_id": 5, "title": "Cryptonomicon", "author": "Stephenson", "length": 918 },
        { "_id": 1, "title": "The Brothers Karamazov", "author": "Dostoyevsky", "length": 824 },

    ]);
}

//$set: replaces the value of a field with a specified one
async function set() {
    await establishConnection();
    const collection = dbConnection.db(MONGO_DB).collection('students');
    const filter = { _id: 2 };

    const updateDocument = {
        $set: {
            title: "Harry Potter"
        },
    };
    await collection.updateOne(filter, updateDocument);
}







//insertStudents
//insertBooks
//insertMany
//insertOe
//updateOne
//updateMany
//Set