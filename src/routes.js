const express = require('express');
const { request } = require('express');
const UserController = require('./Controllers/UserController')
const CityController = require('./Controllers/CityController')
const ClientController = require('./Controllers/ClientController')
const SessionController = require('./Controllers/SessionController')
const routes = express.Router()

routes.post('/users',UserController.createUser)
 routes.get('/users', UserController.findAllUsers)

 routes.post('/cities',CityController.createCity)
 routes.get('/cities',CityController.findAllCities)

 routes.post('/clients/:city_id',ClientController.createClient)
 routes.get('/clients',ClientController.findAllClients)
 routes.get('/clients/:id',ClientController.findClient)


 routes.post('/sessions',SessionController.authenticateUser)


module.exports = routes