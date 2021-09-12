// CONEXAO COM BANCO
import Sequelize   from 'sequelize'
import dbConfig    from '../Config/dataBase'
import User        from '../models/User'
import City        from '../models/City'
import Client      from '../models/Client'
import Company     from '../models/Company'
import Branch      from '../models/Branch'
import UsersBranch from '../models/UsersBranch'

const connection = new Sequelize(dbConfig);
Company.init(connection);
City.init(connection);

User.init(connection);
Branch.init(connection);
Client.init(connection);
UsersBranch.init(connection);


Client.associate(connection.models);
Branch.associate(connection.models)
UsersBranch.associate(connection.models)
User.associate(connection.models)
module.exports = connection;
