
const { VK } = require('vk-io');


const vk = new VK({
  token: process.env.TOKEN
});

class VkService {
  async sendPhoto(picture, id) {
    const randonId = Date.now()
  
    const attachment = await vk.upload.messagePhoto({
      source: {value: picture.data}
    })
    
    await vk.api.messages.send({
      message: '',
      attachment,
      peer_id: id,
      random_id: randonId
    })
    return attachment
  }
  async sendMessage(message, id) {
    const randonId = Date.now()

    await vk.api.messages.send({
      message: message,
      peer_id: id,
      random_id: randonId
    })
    return {message, id}
  }
}

module.exports = new VkService()