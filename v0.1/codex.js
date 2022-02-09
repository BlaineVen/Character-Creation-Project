const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const Char = require('./models/char');
const char = require('./models/char');

mongoose.connect('mongodb://localhost:27017/valmiticRPG', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () =>{
    console.log("Established Connection");
});

//app
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.render('homepage');
});

app.get('/display', async(req, res) =>{
    const chars = await char.find({})
    res.render('characters/index', {chars})
});

app.get('/display/new', async(req, res) =>{
    res.render('characters/new');
});

app.post('/display', async(req, res) =>{
    res.send(req.body);
    // const char = new Char(req.body.char);
    // await char.save();
    // res.redirect(`/display/${char._id}`)
})

// app.get('/display/:id', async(req, res) =>{
// const
// });





app.listen(2643, () =>{
    console.log("Now serving on port Character Creation");
});