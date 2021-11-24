const getAll = require('./getAll')

async function getContactById(contactId) {
  const contacts = await getAll()
  const selectContact = contacts.find(({ id }) => id === contactId)
  if (!selectContact) {
    return null
  }
  return selectContact
  // return console.table(selectContact);
}

module.exports = getContactById
