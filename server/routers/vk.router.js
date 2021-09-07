const {Router} = require('express')
const vkController = require('../controllers/vkController')

const vkRouter = new Router()

vkRouter.post('/sendPhoto', vkController.sendPhoto)
vkRouter.post('/sendMessage', vkController.sendMessage)


module.exports = vkRouter