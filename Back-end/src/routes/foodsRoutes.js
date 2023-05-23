const express = require('express');
const router = express.Router();
const {getFoods, postFood, getFood, updateFood, deleteFood} = require('../Controllers/FoodsController')

router.route('/').get(getFoods).post(postFood);
router.route('/:id').get(getFood).put(updateFood).delete(deleteFood);

module.exports = router;
