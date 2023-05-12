const newRouter = require('./foodmenu');

function route(app) {
  app.get('/', (req, res) => res.render('home'));

  app.use('/food', newRouter);
}

module.exports = route;
