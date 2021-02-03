module.exports = {
  "development": {
    "username": "postgres",
    "password": "docker",
    "database": "desafioVexta",
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
    "dialect": "postgres",
    "define":  {
      "timestamp": true,
      "underscored":true,
      "freezeTableName": true
    }
  }
}
