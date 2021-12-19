const { User } = require('../../models')

const updateSubscription = async (req, res) => {
  const { id, email } = req.params
  const { subscription } = req.body

  await User.findByIdAndUpdate(id, { subscription })
  res.json({
    user: {
      email,
      subscription
    }
  })
}

module.exports = updateSubscription
