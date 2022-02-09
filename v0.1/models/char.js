const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharSchema = new Schema({
    name: String,
    class: String,
    statsA: String,
    statsB: String,
});

module.exports = mongoose.model('Char', CharSchema);