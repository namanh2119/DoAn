const foodsRouter = require('./foods');
const drinksRouter = require('./drinks');

function route(app) {
  app.get('/', (req, res) => res.render('home'));

  app.use('/foods', foodsRouter);

  app.use('/drinks', drinksRouter);
}

module.exports = route;
