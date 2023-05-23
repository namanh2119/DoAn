const path = require('path');
const express = require('express');
const app = express();
const port = 4000;
const errorHandler = require('./middleware/errorhandle')

const data = require('./config');

data.connect();

app.use(express.json());
app.use("/api/foods", require("./routes/foodsRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use(errorHandler)

app.listen(port, () => console.log(`http://localhost:${port}`));
