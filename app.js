//jshint esversion:6

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'fruitsDB';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');

  const insertResult = await collection.insertMany([
    {name: "APPLE"},
    {name: "ORANGE"},
    {name: "BANANA"},
  ]);
  console.log('Inserted documents =>', insertResult);


  const filteredDocs = await collection.find().toArray();
  console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
//
// const filteredDocs = await collection.find({ a: 3 }).toArray();
// console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
//
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);
//
// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log('Deleted documents =>', deleteResult);
//
// const indexName = await collection.createIndex({ a: 1 });
// console.log('index name =', indexName);
