// {"access_token":"603ec31382c384faf7cf5b33e3bc40344a971405e3defa23e3a6ceba36bdec1424bb31304fd9c5ad269b5","user_id":427589033,"first_name":"Сема","last_name":"Дурницин","username":"89000474852"}
require('dotenv').config()
const express= require('express')
const app = express()
const PORT = process.env.PORT || 5050
const vkRouter = require('./routers/vk.router')
const fileUpload = require('express-fileupload')
const cors = require('cors')
 
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(fileUpload({}))
app.use('/api/vk', vkRouter)
 

const start = () => {
    app.listen(PORT, () => {
        console.log(`server was started on PORT: ${PORT}`);
    })
}

start()