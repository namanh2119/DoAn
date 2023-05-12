const express = require('express');
const router = express.Router();

const FoodsController = require('../app/Controllers/FoodsController');

router.get('/', FoodsController.index);

module.exports = router;
