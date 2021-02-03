const express = require('express');
const { request } = require('express');
const UserController = require('./Controllers/UserController')

const routes = express.Router()

routes.post('/users',UserController.createUser)

 routes.get('/users', UserController.findAllUsers)
// routes.get('/users/:id', UserController.retornaUsuario)


module.exports = routes