const express = require('express');
const { request } = require('express');
const UserController = require('./Controllers/UserController')
const CityController = require('./Controllers/CityController')
const ClientController = require('./Controllers/ClientController')
const SessionController = require('./Controllers/SessionController')
const auth = require('./middlewares/auth')
const routes = express.Router()

routes.post('/users',UserController.createUser)

routes.post('/sessions',SessionController.authenticateUser)
routes.use(auth.validateToken)

routes.get('/users', UserController.findAllUsers)
routes.get('/users/:id', UserController.findUser)
routes.patch('/users/:id',UserController.updateUser)
routes.delete('/users/:id',UserController.deleteUser)



routes.post('/cities',CityController.createCity)
routes.get('/cities',CityController.findAllCities)



 
routes.post('/clients',ClientController.createClient)
routes.get('/clients',ClientController.findAllClients)
routes.get('/clients/:id',ClientController.findClient)
routes.patch('/clients/:id',ClientController.updateClient)
routes.delete('/clients/:id',ClientController.deleteClient)

 


module.exports = routes