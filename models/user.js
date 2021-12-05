const Joi = require('joi')
const bcrypt = require('bcryptjs')

const { Schema, model } = require('mongoose')

const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter',
  },
  token: {
    type: String,
    default: null,
  },
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: 'user',
  // },
}, { versionKey: false, timestamps: true })

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

const User = model('user', userSchema)

const joiUserSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string(),
  token: Joi.string()
  //  {
//     type: String,
//     default: null,
//   },
//   owner: {
//     type: SchemaTypes.ObjectId,
//     ref: 'user',
//   },
})

module.exports = {
  User,
  joiUserSchema
}
