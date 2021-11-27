const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const updateFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const { favorite } = req.body
    const contact = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
    if (!contact) {
      throw new NotFound(`Contact with id=${contactId} not found`)
    }
    res.status(200).json({ contact })
  } catch (error) {
    next(error)
  }
}

module.exports = updateFavorite
