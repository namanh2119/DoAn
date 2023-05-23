const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Food = new Schema({
    codeFood: { type: String, required: [true, 'Add a food code']},
    image: { type: String, required: [true, 'Add a food image']},
    name: { type: String, required: [true, 'Add a food name']},
    price: { type: Number, required: [true, 'Add a food price']},
    type: { type: String, required: [true, 'Add a food type']},
    status: { type: String, required: [true, 'Add a food status']},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Food', Food);