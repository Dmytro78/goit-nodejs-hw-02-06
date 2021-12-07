const express = require('express')
const router = express.Router()

const { authorization, validation, ctrlWrapper } = require('../../middlewares')
const { joiContactSchema, joiFavoriteSchema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')

router.get('/', authorization, ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', authorization, validation(joiContactSchema), ctrlWrapper(ctrl.addContact))

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

router.put('/:contactId', validation(joiContactSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', validation(joiFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

module.exports = router
