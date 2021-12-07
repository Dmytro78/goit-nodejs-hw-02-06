const Joi = require('joi')
const { Schema, model } = require('mongoose')

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, 'Set email for contact'],
  },
  phone: {
    type: String,
    minlenght: 5,
    maxlenght: 20,
    required: [true, 'Set phone for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
}, { versionKey: false, timestamps: true })

const Contact = model('contact', contactSchema)

const joiContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().min(5).max(20).required(),
  favorite: Joi.bool(),
  owner: Joi.string(),
})

const joiFavoriteSchema = Joi.object({
  favorite: Joi.bool().required()
})

module.exports = {
  Contact,
  joiContactSchema,
  joiFavoriteSchema
}
