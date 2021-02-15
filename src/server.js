const express = require('express');
const routes = require('./routes');
require('./DataBase/index');

const app = express();
app.use(express.json());

const port = process.env.PORT || '3333';

app.use(routes);

app.listen(port);
