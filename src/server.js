import express from 'express'
import router from './routes';
require('./DataBase/index');

const app = express();
app.use(express.json());

const port = process.env.PORT || '3333';

app.use(router);

app.listen(port);

module.exports = app
