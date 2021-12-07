const { Contact } = require('../../models')

const addContact = async (req, res, next) => {
  try {
    const { _id } = req.user
    const contacts = await Contact.create({ ...req.body, owner: _id })
    res.status(201).json({ contacts })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
