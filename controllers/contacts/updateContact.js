const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    if (!contact) {
      throw new NotFound(`Contact with id=${contactId} not found`)
    }
    res.status(200).json({ contact })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContact
