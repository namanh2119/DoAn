const Drink = require('../models/Drinks');

class DrinksController {
  index(req, res, next) {
    Drink.find({})
      .then(drinks => { res.json(drinks); })
      .catch(next);
  }
}

module.exports = new DrinksController();
