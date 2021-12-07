const { Conflict } = require('http-errors')
const bcrypt = require('bcryptjs')

const { User } = require('../../models')

const signUp = async (req, res) => {
  const { email, password, subscription} = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  const result = await User.create({ email, password: hashPassword })
  res.status(201).json({
    user: {
      email: email,
      subscription: subscription
    }
  })
  return result
}

module.exports = signUp
