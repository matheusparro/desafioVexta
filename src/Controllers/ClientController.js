/* eslint-disable camelcase */
import {cnpj,cpf, validator} from'cpf-cnpj-validator'
import axios from'axios'
import {parse}  from'telefone'
import { Op } from'sequelize'
import {validate}  from 'email-validator'
import {isUri} from'valid-url'
//const validUrl = require('valid-url')
import City from'../models/City'
import Client from'../models/Client'


/** **********VALIDAR EMAIL https://stackoverflow.com/questions/30931079/validating-a-url-in-node-js/55585593 ****** */
async function validateTelephoneCell(numero) {
  const formatedPhone = parse(numero);
  if (!formatedPhone) {
    return null;
  }

  return formatedPhone;
}


// eslint-disable-next-line consistent-return
async function createClient(req, res) {
  const error = [];
  const {
    cpf_cnpj,
    name, trade_name,
    address, number,
    zone, phone, cell_phone, email, site, city_id,
  } = req.body;
  const city = await City.findByPk(city_id);
  if (!city) {
    // res.status(404).json({error:"City not found"})
    error.push({ error: 'City not found' });
  }
  if (site && !isUri(site)) {
    error.push({ error: 'Site is not a valid url' });
  }
  // if (number ) {
  //   // res.status(404).json({error:"Number address must be of the numeric type"})
  //   error.push({ error: 'Number address must be of the numeric type' });
  //   return res.json(error);
  // }
  const cellFormated = await validateTelephoneCell(cell_phone);

  if (cell_phone && !cellFormated) {
    error.push({ error: 'Invalid Cell-Phone' });
  }

  let nature = '';
  let cpf_cnpjFormatado = '';

  if (await validate(email)===false) {
    error.push({ error: 'Invalid e-mail' });
  }
  if (error.length !== 0) {
    return res.status(401).json(error);
  }

  if (cnpj.isValid(cpf_cnpj)) {
    nature = 'J';
    const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cpf_cnpj}`);
    cpf_cnpjFormatado = cnpj.format(cpf_cnpj);

    // FORMATAÇÃO DO TELEFONE
    const telefoneResponse = response.data.telefone.trim().split('/');

    const clientCreated = await Client.create({
      cpf_cnpj: cpf_cnpjFormatado,
      name: response.data.nome ?? name,
      trade_name: response.data.fantasia ?? trade_name,
      nature,
      address: response.data.logradouro ?? address,
      number: response.data.numero ?? number,
      zone: response.data.bairro ?? zone,
      phone: telefoneResponse[0] ?? phone,
      cell_phone: cellFormated ?? cell_phone,
      email,
      site,
      city_id,
    });
    return res.status(201).json(clientCreated);
  }
  if (cpf.isValid(cpf_cnpj)) {
    nature = 'F';
    cpf_cnpjFormatado = cpf.format(cpf_cnpj);
    const telefoneValido = await validateTelephoneCell(phone);
    if (phone && !telefoneValido) {
      return res.json({ error: 'Invalid Phone' });
      // return  res.status(404).json({error:"Invalid Phone"})
    }
    const clientCreated = await Client.create({
      cpf_cnpj: cpf_cnpjFormatado,
      name,
      trade_name: null,
      nature,
      address,
      number,
      zone,
      phone,
      cell_phone,
      email,
      site,
      city_id,
    });
    return res.status(201).json(clientCreated);
  }

  if (!nature) {
    error.push({ error: 'Invalid CPF/CNPJ ' });
  }
  if (error !== 0) {
    return res.status(401).json(error);
  }
}

async function findAllClients(req, res) {
  const {
    cpf_cnpj, name, phone, city_id,
  } = req.query;

  let id_city = city_id;
  if (city_id === '') {
    id_city = 0;
  }

  const clientsFounded = await Client.findAll({
    where: {
      [Op.and]: {

        name: { [Op.iLike]: `%${name}%` },
        cpf_cnpj: { [Op.iLike]: `%${cpf_cnpj}%` },
        phone: { [Op.iLike]: `%${phone}%` },
        city_id: { [Op.eq]: id_city },
      },
    },
  });
  if (clientsFounded.length !== 0) {
    return res.status(201).json(clientsFounded);
  }

  const clientsFounded2 = await Client.findAll({
    where: {
      [Op.and]: {

        name: { [Op.iLike]: `%${name}%` },
        cpf_cnpj: { [Op.iLike]: `%${cpf_cnpj}%` },
        phone: { [Op.iLike]: `%${phone}%` },
      },
    },
  });

  return res.status(201).json(clientsFounded2);
}
async function findClient(req, res) {
  const { id } = req.params;
  const client = await Client.findOne({
    where: { id },
  });
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }
  const city = await City.findByPk(client.city_id);
  return res.status(201).json({ client, city });
}

async function updateClient(req, res) {
  const { id } = req.params;
  const client = await Client.findByPk(id);
  if (!client) {
    return res.status(400).json({ error: 'Client does not exist' });
  }
  await client.update(req.body);

  return res.status(201).json(client);
}
async function deleteClient(req, res) {
  const { id } = req.params;
  const client = await Client.findByPk(id);
  if (!client) {
    return res.status(404).json({ error: 'Client does not exist' });
  }
  await client.destroy();

  return res.status(201).json(client);
}

module.exports = {
  createClient,
  findAllClients,
  findClient,
  updateClient,
  deleteClient,
  validateTelephoneCell

};
