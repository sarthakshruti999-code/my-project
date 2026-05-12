const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
// const path = require("path");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const initDB = async () => {
    console.log("Length is:", initdata.data.length);
    await Listing.deleteMany({});
    const listingsWithOwner = initdata.data.map((obj) => ({
        ...obj,
        owner: "69f20dedcfd6e10403632470"   // paste the _id you copied
    }));
    await Listing.insertMany(listingsWithOwner);
    
    console.log("Data was initialized");
};

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");
}

main()
    .then(() => {
        return initDB();
    })
    .catch((err) => {
        console.log(err);
    });