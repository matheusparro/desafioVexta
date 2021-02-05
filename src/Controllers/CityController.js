const City = require("../models/City");

async function createCity(req,res){
        const{name,uf} = req.body;
        const cityCreated =  City.create({name,uf});
        return res.json(cityCreated)
    }

    async function findAllCities(req,res){
       return res.json(await City.findAll())
    }   

module.exports = {
    createCity,
    findAllCities
}