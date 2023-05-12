const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 4000;

const route = require('./routes');
const data = require('./config/Data');

data.connect();

app.use(morgan('combined'));

app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => console.log(`http://localhost:${port}`));