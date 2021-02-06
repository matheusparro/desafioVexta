module.exports = {
  "development": {
    "username": "postgres",
    "password": "docker",
    "database": "desafioVexta",
    "port":"5432",
    "host": "localhost",
    "dialect": "postgres",
    "define":  {
      "timestamp": true,
      "underscored":true,
      "freezeTableName": true
    }
  },
  "test": {
    "username": "postgres",
    "password": "docker",
    "database": "desafioVexta",
    "host": "localhost",
    "port":"5432",
    "dialect": "postgres",
    "define":  {
      "timestamp": true,
      "underscored":true,
      "freezeTableName": true
    }
    
  },
  "production": {
    "username": "postgres",
    "password": "docker",
    "database": "desafioVexta",
    "host": "localhost",
    "port":"5432",
    "dialect": "postgres",
    "define":  {
      "timestamp": true,
      "underscored":true,
      "freezeTableName": true
    }
  }
}
