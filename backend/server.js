const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

const mongoURI =
  "mongodb+srv://ujwal:nftminter2002@clusternft.axj8rdh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNFT";

// Connect to MongoDB
const client = new MongoClient(mongoURI);

client
  .connect()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.get("/api/data", async (req, res) => {
  try {
    const database = client.db("Addresses");
    const collection = database.collection("try1");
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
