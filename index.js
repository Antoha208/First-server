import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
import fileUpload from 'express-fileupload';

import bodyParser from 'body-parser';

const PORT = 3000;
const DB_URL = `mongodb+srv://Antoha208:!!!@cluster0.vwmuv.mongodb.net/Thefirstserverapp?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)
app.use(fileUpload({}))
app.use(bodyParser.urlencoded({extended: false}))

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT: ' + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()