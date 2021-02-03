// CONEXAO COM BANCO
const Sequelize = require ('sequelize');
const dbConfig = require ('../Config/dataBase')

const User = require('../models/User');

const connection = new Sequelize(dbConfig);

User.init(connection)






module.exports = connection;