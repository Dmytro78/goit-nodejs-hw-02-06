const fs = require('fs').promises

const getAll = require('./getAll')
const contactsPath = require('./contactsPath')

const { v4 } = require('uuid')

async function addContact(data) {
  const newContact = {
    id: v4(),
    ...data
  }
  const contacts = await getAll()
  contacts.push(newContact)
  const updateContacts = await JSON.stringify(contacts)
  await fs.writeFile(contactsPath, updateContacts)
  // console.table(contacts);
}

module.exports = addContact
