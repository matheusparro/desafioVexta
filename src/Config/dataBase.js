module.exports = {
    dialect: 'postgres',
    host: 'ec2-52-204-113-104.compute-1.amazonaws.com',
    username:'krzxzgwobtijtw',
    password:'9c62f76099eaf2e86c54a70f8f192ec0db6a66d73b9ef6ed2c51c7c111c603e2',
    database:'dckl19bkq29ks8',
    // dialect: 'postgres',
    // host: 'localhost',
    // username:'postgres',
    // password:'docker',
    // database:'desafioVexta',
    port : '5432',
    protocol: 'postgres',
    define:  {
        timestamp: true,
        underscored:true,
        freezeTableName: false,
    },
}
