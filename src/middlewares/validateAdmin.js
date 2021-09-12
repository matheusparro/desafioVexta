import User from '../models/User'


  async function validateAdmin(req, res, next) {
    const user = await User.findByPk(req.userId);
    if (!user.isAdmin) {
      return res.status(406).json({ error: 'You need to be Admin to do this' });
    }
    return next();
  }
  export default {validateAdmin};
