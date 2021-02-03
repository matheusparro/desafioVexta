const User = require("../models/User");
const bcrypt = require('bcryptjs');

async function createUser(req,res){
        const{login,name,password,isAdmin} = req.body;
        await 
        console.log(bcrypt.hash(password,8))
        const userCreated = User.create({login,name,password,isAdmin});
        User.beforeCreate((user, options) => { return bcrypt.hash(user.password, 10) .then(hash => { user.password = hash; }) .catch(err => { throw new Error(); }); }); 
        return res.json({userCreated})
    }

    async function findAllUsers(req,res){
       return res.json(await User.findAll())
    }   

module.exports = {
    createUser,
    findAllUsers
}