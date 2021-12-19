const { BadRequest } = require('http-errors')

const { User } = require('../../models')

const reSending = async (req, res) => {
  const { email } = req.body
  if (!email) {
    throw new BadRequest('missing required field email')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new BadRequest('Bad Request')
  }
  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

  res.json({
    message: 'Verification email sent'
  })
}

module.exports = reSending
