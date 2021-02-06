const City = require("../models/City");

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
                {name:{[Op.iLike]:"%"+name}},
                {uf:{[Op.eq]:uf}},
                ]
            }
        })
        if (citiesQuery.length===0){
            const cities = await City.findAll()
            if (!cities){
                return res.status(401).json({error:"Cities not found"})
            }
            return res.json(clients)
        }

        return res.json(await City.findAll())
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
            return res.status(400).json({error:"City does not exist"})
        }
        await city.update(req.body)
        
        return res.json(city)
     } 

     async function deleteCity(req,res){
        const {id} = req.params
        const city = await City.findByPk(id)
        if (!client){
            return res.status(400).json({error:"City does not exist"})
        }
        await city.destroy()
        
        return res.json(city)
     } 
    
    
   
module.exports = {
    createCity,
    findAllCities,
    findCity,
    updateCity
}