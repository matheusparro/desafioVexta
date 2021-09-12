import express from 'express'
import UserController from './Controllers/UserController'
import CityController from './Controllers/CityController'
import ClientController from './Controllers/ClientController'
import SessionController from './Controllers/SessionController'
import auth from './middlewares/auth'
import admin from './middlewares/validateAdmin'
//const UsersBranchesController = require('./Controllers/UsersBranchesController')
import UsersBranchesController from './Controllers/UsersBranchesController'
const routes = express.Router();

routes.get('/', (req,res)=>{
  res.send({message:"Server ON"})
});
routes.post('/usersbranches', UsersBranchesController.createUsersBranches);
routes.post('/users', UserController.createUser);
routes.post('/branches', UsersBranchesController.teste);

routes.post('/sessions', SessionController.authenticateUser);
//routes.use(auth.validateToken);
//routes.use(admin.validateAdmin);
routes.get('/users', UserController.findAllUsers);


routes.get('/users/:id', UserController.findUser);
routes.patch('/users/:id', UserController.updateUser);
routes.delete('/users/:id', UserController.deleteUser);

routes.get('/cities', CityController.findAllCities);
routes.get('/cities/:id', CityController.findCity);
routes.post('/cities', CityController.createCity);
routes.patch('/cities/:id', CityController.updateCity);
routes.delete('/cities/:id', CityController.deleteCity);

routes.get('/clients', ClientController.findAllClients);
routes.get('/clients/:id', ClientController.findClient);
routes.post('/clients', ClientController.createClient);
routes.patch('/clients/:id', ClientController.updateClient);
routes.delete('/clients/:id', ClientController.deleteClient);




export default routes;
