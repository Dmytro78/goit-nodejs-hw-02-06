const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

const { User } = require('../../models')

const { SECRET_KEY } = process.env

const login = async (req, res) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (!user || !user.verify || !user.comparePassword(password)) {
    throw new Unauthorized('Email is wrong or not verify, or password is wrong')
  }
  // if (!user) {
  //   throw new Unauthorized('Email is wrong')
  // }
  // const passCompare = bcrypt.compareSync(password, user.password)
  // if (!passCompare) {
  //   throw new Unauthorized('Password is wrong')
  // }
  const payload = {
    id: user._id
  }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
  await User.findByIdAndUpdate(user._id, { token })
  res.json({
    token: token,
    user: {
      email: email,
      subscription: subscription
    }
  })
}
module.exports = login
