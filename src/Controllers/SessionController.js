import jwt from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../Config/authConfig'

async function authenticateUser(req, res) {
  const { login, password } = req.body;

  const userFind = await User.findOne({ where: { login } });
  if (!userFind) {
    return res.status(401).json('User not found');
  }

  if (!(await userFind.checkPassword(password))) {
    return res.status(401).json({ error: 'Password does not match ' });
  }

  const { id, name } = userFind;
  return res.status(201).json({
    user: {
      login,
      name,
    },
    token: jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    }),
  });
}
export default {
  authenticateUser,
};
