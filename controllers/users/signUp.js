const { Conflict } = require('http-errors')
const { User } = require('../../models')

const signUp = async (req, res) => {
  const { email, password, subscription} = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const result = await User.create({ email, password, subscription })
  res.status(201).json({
    user: {
      email,
      subscription
    }
  })
}

module.exports = signUp
