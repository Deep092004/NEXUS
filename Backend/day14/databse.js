// mongo Db installation and connection


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// @===%40 
// @===hexadecimal for @
const url = "mongodb+srv://mrbean0981_db_user:deep123@jaatji.0x2r3je.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'deepanshu';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('kadyan');

  // the following code examples can be pasted here...
//   const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
const insertResult = await collection.insertOne({ name: "Deepanshu", age: 22, city: "Rohtak" });
console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());