var express = require('express')
var router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.all)
router.post('/', userController.store)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)

module.exports = router
