
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const email = {
  to: 'nekiv47088@swsguide.com',
  from: 'fttravel78@gmail.com',
  subject: 'Новая заявка с сайта',
  html: '<p>С сайта пришла новая заявка</p>'
}

sgMail.send(email)
  .then(() => console.log('Email send success'))
  .catch(error => console.log(error.message))
