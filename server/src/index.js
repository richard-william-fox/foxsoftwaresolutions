import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import cors from 'cors'
import sendOrderEmail from './emails/estimates.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const port = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)


app.use(bodyParser.json())
app.use(cors())

app.use(express.json())

app.post('/sendEstimateEmail', (req, res) => {
    const errorInfo = {
        estimate: req.body
    }
    try {
        sendOrderEmail()
    } catch (error) {
        console.error('Error sending email: ' + error)
    }
    res.status(200).send()
})

//React frontend
// Source - https://stackoverflow.com/a/44684492
app.use(express.static(path.join(__dirname, '../../client/dist')))

app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'))
})

server.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})

