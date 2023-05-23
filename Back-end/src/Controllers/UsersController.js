const User = require('../models/UsersModels');
const asyncHandler = require('express-async-handler');

const currentUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error('User cannot found!')
    }
    res.status(200).json(user);
})

const registerUser = asyncHandler(async (req, res) => {
  console.log('The request body is:', req.body);
  const { avatar, account, password, phone, email, address, isAdmin } = req.body;
  if (!avatar || !account || !password || !phone || !email || !address) {
    res.status(400);
    throw new Error('All fields are madatory!')
  }
  const user = await User.create({ 
    avatar , account, password, phone, email, address, isAdmin})
  res.status(201).json(user);
})

const loginUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User cannot found!')
  }
  res.status(200).json(user);
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!User) {
    res.status(404);
    throw new Error('User cannot found!')
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true});
  res.status(200).json(updatedUser);
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User cannot found!')
  }
  const deleteUser = await user.findByIdAndRemove(
    req.params.id,
    req.body)
  res.status(200).json(deleteUser);
})

module.exports = {currentUser, registerUser, loginUser, updateUser, deleteUser};
