const express = require('express');
const router = express.Router();

const foodmenuController = require('../app/Controllers/FoodmenuController');

router.use('/', foodmenuController.index)

module.exports = router;    