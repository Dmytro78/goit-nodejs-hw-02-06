// Dmitriy
// M1DOr9ASYJpfxqfj
// mongodb+srv://Dmitriy:M1DOr9ASYJpfxqfj@cluster0.nibi5.mongodb.net/test
// const DB_HOST = 'mongodb+srv://Dmitriy:M1DOr9ASYJpfxqfj@cluster0.nibi5.mongodb.net/db-contacts?retryWrites=true&w=majority'

const mongoose = require('mongoose')

// const dotenv = require('dotenv')
// dotenv.config();
require('dotenv').config()

const { DB_HOST } = process.env

mongoose.connect(DB_HOST)
  .then(() => console.log('Database connection successful'))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
