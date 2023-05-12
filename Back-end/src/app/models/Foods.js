const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Food = new Schema({
    _id: Number,
    codeFood: String,
    image: String,
    name: String,
    price: Number,
    type: String,
    status: String,
}, {
    _id: false,
    timestamps: true,
});

module.exports = mongoose.model('Food', Food);