// const app = require('../app')

// const { PORT = 3000 } = process.env

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`)
// })

const mongoose = require('mongoose')
const app = require('../app')

// const dotenv = require('dotenv')
// dotenv.config();
require('dotenv').config()

const { DB_HOST, PORT=3000 } = process.env

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
