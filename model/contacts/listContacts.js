const fs = require('fs').promises;
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    console.error(error)
    throw error
  }
}
// const getAll = require("./getAll");

// async function listContacts() {
//     const contacts = await getAll();
//     const list = contacts.map(({ name, phone, email }) => {
//       return {
//         name,
//         phone,
//         email,
//       };
//     });
//     // console.table(list);
// }

module.exports = listContacts;