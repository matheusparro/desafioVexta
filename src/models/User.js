const {Model, DataTypes} = require ('sequelize')

class User extends Model{
    static init(connection){
        super.init({
            login:DataTypes.STRING,
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            isAdmin:DataTypes.CHAR,
        }, {
            sequelize: connection
        })
       
 
    }
   
}

module.exports = User