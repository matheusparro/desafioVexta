const Client = require("../models/Client");
const cpfCnpjValidator = require("cpf-cnpj-validator")
const axios = require("axios")
const parse = require("telefone/parse")
const Op = require("Sequelize/lib/operators")
const  emailValidator  = require ( "email-validator" ) 
const City = require("../models/City"); 

/************VALIDAR EMAIL https://stackoverflow.com/questions/30931079/validating-a-url-in-node-js/55585593 *******/
async function validateTelephoneCell(numero){
    let formatedPhone = parse(numero)
    if (!formatedPhone){
        return "Telefone inválido"
    }
    return formatedPhone
}

async function createClient(req,res){
   
        const{cpf_cnpj,
        name,trade_name,
        address,number,
        zone,phone,cell_phone,email,site,
        }= req.body;
        const {city_id} = req.params
        const city =  await City.findByPk(city_id)
        if (!city){
            res.status(404).json({error:"Cidade não foi encontrada"})
        }
        
        let nature =''
        let cpf_cnpjFormatado = ''
        
        if(!await emailValidator.validate(email)){
            return res.status(404).json({error:'Email inválido'})
        }

        if (cpfCnpjValidator.cnpj.isValid(cpf_cnpj)){
            nature = 'J'
            const response = await axios.get("https://www.receitaws.com.br/v1/cnpj/"+cpf_cnpj)
            cpf_cnpjFormatado = cpfCnpjValidator.cnpj.format(cpf_cnpj)
            
            //FORMATAÇÃO DO TELEFONE 
            const telefoneResponse = response.data.telefone.trim().split("/")
            const telefoneFormatado = await validateTelephoneCell(telefoneResponse[0])
            
            if (!telefoneFormatado){
                return  res.status(404).json({error:"Telefone Inválido"})
            }
            
            const clientCreated =  await Client.create({cpf_cnpj:cpf_cnpjFormatado,
                name,
                trade_name:response.data.fantasia??trade_name,
                nature,
                address:response.data.logradouro??address,
                number:response.data.numero??number,
                zone:response.data.bairro??zone,
                phone:telefoneFormatado??phone,
                cell_phone:cell_phone??cell_phone,
                email,
                site,
                city_id,
                });
            return res.json(clientCreated)
        }else{
            if (cpfCnpjValidator.cpf.isValid(cpf_cnpj)){
                nature = 'F'
                cpf_cnpjFormatado = cpfCnpjValidator.cpf.format(cpf_cnpj)
                const telefoneFormatado = telefoneFormatado(telefone)
                if (!telefoneFormatado){
                    return  res.status(404).json({error:"Phone Invalid"})
                }
                const clientCreated =  await Client.create({cpf_cnpj:cpf_cnpjFormatado,
                    razao_social,nome_fantasia:null,
                    nature,endereco,numero,
                    bairro,telefone:telefoneFormatado,email,site,city_id
                    });
                return res.json(clientCreated)
            }
        }
        if (!nature){
            return  res.status(404).json({error:"Invalid CPF/CNPJ "})
        }

    }

    
    async function findAllClients(req,res){
        const name = req.query.name
        
        const clientsQuery = await Client.findAll({
            where: { name:{
                [Op.eq]:"%"+name+"%"
            }}
        })
        if (clientsQuery.length===0){
            let clients = await Client.findAll()
            return res.json(clients)
        }
        
       return res.json(clientsQuery)
    }  
    async function findClient(req,res){
      
        const{id} = req.params
        const client = await Client.findOne({
            where:{id}
        })
        if (!client){
            return res.status(404).json({error:"Client not found"})
        }
        return res.json(client)
     }  

module.exports = {
    createClient,
    findAllClients,
    findClient,
    // updateClient,
}