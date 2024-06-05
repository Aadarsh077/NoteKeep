const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://azazel:55NwXFgCsA7kXvw2@cluster0.gnvdsdb.mongodb.net/inotebook";
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;
