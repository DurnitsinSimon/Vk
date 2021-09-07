const vkService = require("../services/vkService")


class VkController {
    async sendPhoto(req, res) {
        try {
            const { picture } = req.files
            const { id } = req.body
            const vk = await vkService.sendPhoto(picture, +id)
            return res.json(vk)
        } catch (e) {
            console.log(e);
        }
    }

    async sendMessage(req, res) {
        try {
            const { id, message } = req.body
            const vk = await vkService.sendMessage(message, id)
            return res.json(vk)
        } catch (e) {
            console.log(e);
        }

    }
}

module.exports = new VkController()