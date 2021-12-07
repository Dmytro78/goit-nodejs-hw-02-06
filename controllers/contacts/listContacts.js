const { Contact } = require('../../models')

const listContacts = async (req, res, next) => {
  try {
    const { _id } = req.user
    // const contacts = await Contact.find({ owner: _id }).populate('owner', '_id email')
    const { page = 1, limit = 20 } = req.query
    const skip = (page - 1) * limit
    const contacts = await Contact.find({ owner: _id }, '', { skip, limit: Number(limit) }).populate('owner', '_id email')
    res.status(201).json({ contacts })
  } catch (error) {
    next(error)
  }
}

module.exports = listContacts
