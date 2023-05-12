const express = require('express');
const router = express.Router();

const DrinksController = require('../app/Controllers/DrinksController');

router.get('/', DrinksController.index);

module.exports = router;