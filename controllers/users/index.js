const signUp = require('./signUp')
const login = require('./login')
const current = require('./current')
const logout = require('./logout')
const updateSubscription = require('./updateSubscription')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const reSending = require('./reSending')

module.exports = {
  signUp,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  reSending
}
