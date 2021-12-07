const express = require('express')
const router = express.Router()

const { validation, ctrlWrapper, authorization } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { joiUserSchema, subJoiSchema } = require('../../models/user')

router.post('/signup', validation(joiUserSchema), ctrlWrapper(ctrl.signUp))
// router.post('/registr')
router.post('/login', validation(joiUserSchema), ctrlWrapper(ctrl.login))
// router.post('/signin')
router.get('/current', authorization, ctrlWrapper(ctrl.current))
router.post('/logout', authorization, validation(joiUserSchema), ctrlWrapper(ctrl.logout))
// router.post('/signout')
router.patch('/', validation(subJoiSchema), ctrlWrapper(ctrl.updateSubscription))
module.exports = router
