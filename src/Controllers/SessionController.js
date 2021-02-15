const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../Config/authConfig');

async function authenticateUser(req, res) {
  const { login, password } = req.body;

  const userFind = await User.findOne({ where: { login } });
  if (!userFind) {
    res.status(401).json('User not found');
  }

  if (!(await userFind.checkPassword(password))) {
    return res.status(401).json({ error: 'Password does not match ' });
  }

  const { id, name } = userFind;
  return res.json({
    user: {
      login,
      name,
    },
    token: jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    }),
  });
}
module.exports = {
  authenticateUser,
};
