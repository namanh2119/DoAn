const Food = require('../models/Foods');

class FoodsController {
  index(req, res, next) {
    Food.find({})
      .then(foods => { res.json(foods); })
      .catch(next);
  }
}

module.exports = new FoodsController();
