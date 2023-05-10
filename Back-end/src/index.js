const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 4000;

app.use(morgan('combined'));

app.get('/tin-tuc', (req, res) => res.send('123'));

app.listen(port, () => console.log(`http://localhost:${port}`));