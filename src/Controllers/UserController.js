const User = require("../models/User");

async function createUser(req,res){
        
        const userCreated = await User.create(req.body);
        return res.json(userCreated)
    }

    async function findAllUsers(req,res){
       return res.json(await User.findAll())
    }   

module.exports = {
    createUser,
    findAllUsers
}