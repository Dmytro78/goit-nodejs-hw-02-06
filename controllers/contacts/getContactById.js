// const {NotFound} = require('http-errors')

const contactsOperations = require('../../model/contacts')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  const contact = await contactsOperations.getContactById(contactId)
  if (!contact) {
    return res.status(404).json({ message: 'Not found' })
    // throw new NotFound(`Contact with id=${contactId} not found`)
  }
  res.json({ contact })
}

module.exports = getContactById
