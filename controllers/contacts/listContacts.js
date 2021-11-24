const contactsOperations = require('../../model/contacts')

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts()
    res.json({ contacts })
  } catch (error) {
    next(error)
  }
}

module.exports = listContacts