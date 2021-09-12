import {Op} from 'sequelize'
import UsersBranch from '../models/UsersBranch'
import  User from '../models/User'
import  Branch from '../models/Branch'
async function createUsersBranches(req, res) {
  const userBranchedCreated = await UsersBranch.create(req.body);
  return res.status(201).json(userBranchedCreated);
}
async function teste(req, res) {
  console.log("OLAA")
  const {name,company_id} =req.body
  let brachCreated = await Branch.create({name,company_id})
  //brachCreated.addUsers([userCreated])
  return res.status(201).json(brachCreated);
}
export default {createUsersBranches,teste}
