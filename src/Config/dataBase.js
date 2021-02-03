module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username:'postgres',
    password:'docker',
    database:'desafioVexta',
    port : '5432',
    define:  {
        timestamp: true,
        underscored:true,
        freezeTableName: false,
    },
}
