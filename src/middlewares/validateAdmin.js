const User = require('../models/User')

module.exports = {
  validateAdmin: async function(req, res, next){
    const user = await User.findByPk(req.userId)
    if (!user.isAdmin){
      return res.status(406).json({error:"You need to be Admin to do this"})
    }
    next()
  }
}
