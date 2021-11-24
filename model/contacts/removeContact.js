const update = require('./update')
const getAll = require('./getAll')

async function removeContact(contactId) {
  const contacts = await getAll()
  const idx = contacts.findIndex(({ id }) => id === contactId)
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter(({ id }) => id !== contactId)
  await update(newContacts)
  return contacts[idx]
}

module.exports = removeContact
