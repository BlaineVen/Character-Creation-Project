const mongoose = require('mongoose');
const Char = require('../models/char');

mongoose.connect('mongodb://localhost:27017/valmiticRPG', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () =>{
    console.log("Established Connection");
});


const seedDB = async() => {
    await Char.deleteMany({});
   
}

seedDB();