const { Conflict } = require('http-errors')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')

const { User } = require('../../models')

const signUp = async (req, res) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  const avatarURL = gravatar.url(email)
  const result = await User.create({ email, password: hashPassword, avatarURL })
  res.status(201).json({
    user: {
      email: email,
      subscription: subscription,
      avatarURL
    }
  })
  return result
}

module.exports = signUp
