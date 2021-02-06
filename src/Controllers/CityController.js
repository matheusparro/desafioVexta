const City = require("../models/City");
const Op = require("sequelize/lib/operators")

async function createCity(req,res){
        const{name,uf} = req.body;
        const cityCreated =  await City.create({name,uf});
        return res.json(cityCreated)
    }

    async function findAllCities(req,res){
        const {name,uf} = req.query
         
        const citiesQuery = await City.findAll({
            where: { 
                [Op.and]:[
                {name:{[Op.iLike]:`%${name}%`}},
                {uf:{[Op.iLike]:`%${uf}%`}},
                ]
            }
        })
        return res.json(citiesQuery)
    }

    async function findCity(req,res){
      
        const{id} = req.params
        const city = await City.findOne({
            where:{id}
        })
        if (!city){
            return res.status(404).json({error:"City not found"})
        }
    
        return res.json(city)
     }

     async function updateCity(req,res){
        const {id} = req.params
        const city = await City.findByPk(id)
        if (!client){
            return res.status(404).json({error:"City does not exist"})
        }
        await city.update(req.body)
        
        return res.json(city)
     } 

     async function deleteCity(req,res){
        const {id} = req.params
        const city = await City.findByPk(id)
        if (!client){
            return res.status(404).json({error:"City does not exist"})
        }
        try {
            await city.destroy()
        } catch (error) {
            return res.status(412).json({error:"City is used by a client"})
        }
     
        
        return res.json(city)
     } 
    
    
   
module.exports = {
    createCity,
    findAllCities,
    findCity,
    updateCity,
    deleteCity
}