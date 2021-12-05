const express = require('express')
const router = express.Router()

const { validation, ctrlWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { joiUserSchema } = require('../../models/user')

router.post('/signup', validation(joiUserSchema), ctrlWrapper(ctrl.signUp))
// router.post('/registr')
router.post('/login', validation(joiUserSchema), ctrlWrapper(ctrl.login))
// router.post('/signin')

module.exports = router
