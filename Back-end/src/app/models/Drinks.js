const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Drink = new Schema({
    codeDrink: String,
    image: String,
    name: String,
    price: Number,
    type: String,
    status: String,
});

module.exports = mongoose.model('Drink', Drink);