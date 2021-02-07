// module.exports = {
//   "username": "postgres",
//   "password": "docker",
//   "database": "desafioVexta",
//   "port":"5432",
//   "host": "localhost",
//   "dialect": "postgres",
//   "define":  {
//     "timestamp": true,
//     "underscored":true,
//     "freezeTableName": false
//   }
// }
  

//CCONFIG HEROKU
module.exports = {
  host: 'ec2-52-205-3-3.compute-1.amazonaws.com',
  username:'hfailttvrveoxr',
  password:'67c4fb55cb1cbd2707542ab965c6a272cee3d5c3dd2771a62495c47d547be845',
  database:'dbcen3s14hknqs',
  // url:process.env.DATABASE_URL,
  dialect: 'postgres',
  port : '5432',
  define:  {
      timestamp: true,
      underscored:true,
      freezeTableName: false,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  }
}


