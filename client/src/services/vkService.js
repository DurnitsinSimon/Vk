import $api from '../http/index'
class VkService {
    static async sendPhoto(picture, id) {
        const formData = new FormData()
        formData.append('picture', picture)
        formData.append('id', id)
        $api.post('/sendPhoto', formData)
    }
    static async sendMessage(message, id) {
        $api.post('/sendMessage', {
            message,
            id
        })

    }
}

export default VkService