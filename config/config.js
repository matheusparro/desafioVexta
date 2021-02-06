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
// module.exports = {
//   "development": {
//     "url": "process.env.DATABASE_URL",
//     "dialect": "postgres",
//     "define":  {
//       "timestamp": "true",
//       "underscored":"true",
//       "freezeTableName": "true"
//     }
//   },
  
//   "test": {
//     "url": "process.env.DATABASE_URL",
//     "dialect": "postgres",
//     "define":  {
//       "timestamp": "true",
//       "underscored":"true",
//       "freezeTableName": "true"
//     }
//   },
//   production: {
//     "url": "process".env.DATABASE_URL,
//     "dialect": "postgres",
//     "define":  {
//       "timestamp": "true",
//       "underscored":"true",
//       "freezeTableName": "true"
//     }
//   },
// }

module.exports = {
  dialect: 'postgres',
  url: 'process.env.DATABASE_URL',
  define:  {
      timestamp: true,
      underscored:true,
      freezeTableName: false,
  },
}

