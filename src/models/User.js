const {Model, DataTypes} = require ('sequelize')
const bcrypt = require('bcryptjs');
class User extends Model{
    static init(connection){
        super.init({
            login:DataTypes.STRING,
            name: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
            isAdmin:DataTypes.CHAR,
        }, {
            sequelize: connection
        })
       this.addHook('beforeSave',async user =>{
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password,8)
            }
       })
       return this
 
    }
    checkPassword(password){
        return bcrypt.compare(password,this.password_hash)
    }
   
}

module.exports = User