const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB-yhteys onnistui!");
    return client.db("Cleanbusiness"); // Palauttaa tietokannan instanssin
  } catch (error) {
    console.error("❌ MongoDB-yhteyden virhe:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
