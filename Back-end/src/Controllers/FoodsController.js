const Food = require('../models/FoodsModels');
const asyncHandler = require('express-async-handler');

const getFoods = asyncHandler(async (req, res) => {
  const foods = await Food.find();
  res.status(200).json(foods);
})

const postFood = asyncHandler(async (req, res) => {
  console.log('The request body is:', req.body);
  const { codeFood, image, name, price, type, status } = req.body;
  if (!codeFood || !image || !name || !price || !type || !status) {
    res.status(400);
    throw new Error('All fields are madatory!')
  }
  const food = await Food.create({ 
    codeFood , image, name, price, type, status})
  res.status(201).json(food);
})

const getFood = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    res.status(404);
    throw new Error('Food cannot found!')
  }
  res.status(200).json(food);
})

const updateFood = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    res.status(404);
    throw new Error('Food cannot found!')
  }
  const updatedFood = await Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true});
  res.status(200).json(updatedFood);
})

const deleteFood = asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    res.status(404);
    throw new Error('Food cannot found!')
  }
  const deleteFood = await Food.findByIdAndRemove(
    req.params.id,
    req.body)
  res.status(200).json(deleteFood);
})

module.exports = {getFoods, postFood, getFood, updateFood, deleteFood};
