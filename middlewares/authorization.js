const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const { SECRET_KEY } = process.env

const authorization = async(req, res, next) => {
  const { authorization = ' ' } = req.headers
  const [bearer, token] = authorization.split(' ')
  try {
    if (bearer !== 'Bearer') {
      throw new Unauthorized('Not autorized')
    }
    const { id } = jwt.verify(token, SECRET_KEY)
    const user = await User.findById(id)
    if (!user || !user.token) {
      throw new Unauthorized('Not autorized')
    }
    req.user = user
    next()
  } catch (error) {
    if (error.massage === 'Invalid sugnature') {
      error.status = 400
    }
    next(error)
  }
}
module.exports = authorization
