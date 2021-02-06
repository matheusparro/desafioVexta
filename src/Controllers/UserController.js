const User = require("../models/User");
const {Op} = require("sequelize")
async function createUser(req,res){
    const {login} = req.body
    const userFind = await User.findOne({
        where:{login}
    })
    if(userFind){
        return res.status(401).json({error:"Login already used"})
    }
    const userCreated = await User.create(req.body);
    return res.json(userCreated)
}



async function findAllUsers(req,res){
    const name = req.query.name
    
    const usersQuery = await User.findAll({
        where: { name:{
            [Op.iLike]:`${name}`
        }}
    })
   
   return res.json(usersQuery)
}

async function findUser(req,res){
    const {id} = req.params
    const user = await User.findByPk(id)
    if (!user){
        return res.status(401).json({error:"User not found"})
    }
    return res.json(user)
 } 


 async function updateUser(req,res){
    const {id} = req.params
    const user = await User.findByPk(id)
    if (!user){
        return res.status(400).json({error:"User not found"})
    }
    const{oldPassword} =req.body
    if(oldPassword && !(await user.checkPassword(oldPassword))){
        return res.status(400).json({error:"Passwords dont match"})
    }
    await user.update(req.body)
    
    return res.json(user)
 } 
 async function deleteUser(req,res){
    const {id} = req.params
    const user = await User.findByPk(id)
    if (!user){
        return res.status(400).json({error:"User not found"})
    }
    await user.destroy()
    
    return res.json(user)
 }  
   

module.exports = {
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser
}