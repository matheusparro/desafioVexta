// CONEXAO COM BANCO
const sequelize = require ('sequelize');
const dbConfig = require ('../Config/dataBase')

const User = require('../models/User');
const City = require('../models/City');
const Client = require ('../models/Client')
const connection = new sequelize(dbConfig);

User.init(connection)
City.init(connection)
Client.init(connection)

Client.associate(connection.models)


module.exports = connection;