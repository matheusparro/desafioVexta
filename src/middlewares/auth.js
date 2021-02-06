const {promisify} = require('util')
const jwt= require('jsonwebtoken')
const authConfig = require('../Config/authConfig')

module.exports = {
  validateToken: async function(req, res, next){
    const authHeader = req.headers.authorization

    if(!authHeader){
      return res.status(401).json({error:'Token not provided'})
    }
      const [,token] = authHeader.split(' ')
      try {
        const verify = await promisify(jwt.verify)(token,authConfig.secret)
        req.userId = verify.id
        return next()
      } catch (err) {
        return res.status(401).json({error:' Token invalid'})
      }
  }
}
