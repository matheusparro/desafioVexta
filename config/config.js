// module.exports = {
//   "development": {
//     "username": "postgres",
//     "password": "docker",
//     "database": "desafioVexta",
//     "port":"5432",
//     "host": "localhost",
//     "dialect": "postgres",
//     "define":  {
//       "timestamp": true,
//       "underscored":true,
//       "freezeTableName": true
//     }
//   },
  
//   "test": {
//     "username": "postgres",
//     "password": "docker",
//     "database": "desafioVexta",
//     "host": "localhost",
//     "port":"5432",
//     "dialect": "postgres",
//     "define":  {
//       "timestamp": true,
//       "underscored":true,
//       "freezeTableName": true
//     }
//   },
//   "production": {
//     "username": "postgres",
//     "password": "docker",
//     "database": "desafioVexta",
//     "host": "localhost",
//     "port":"5432",
//     "dialect": "postgres",
//     "define":  {
//       "timestamp": true,
//       "underscored":true,
//       "freezeTableName": true
//     }
//   }
// }
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

// module.exports = {
//   dialect: 'postgres',
//   url: 'process.env.DATABASE_URL',
//   define:  {
//       timestamp: true,
//       underscored:true,
//       freezeTableName: false,
//   },
// }

module.exports = {
  host: 'ec2-52-205-3-3.compute-1.amazonaws.com',
  username:'hfailttvrveoxr',
  password:'67c4fb55cb1cbd2707542ab965c6a272cee3d5c3dd2771a62495c47d547be845',
  database:'dbcen3s14hknqs',
  dialect: 'postgres',
  port : '5432',
  define:  {
      timestamp: true,
      underscored:true,
      freezeTableName: false,
  },
}


