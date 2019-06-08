const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const fetch = require('node-fetch')
const app = express()
const port = 3000
require('dotenv').config()

const { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY} = process.env

app.use(bodyParser.json())
app.use(logger('combined'))


const headers = {
    "Authorization": `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    "Content-Type": "application/json",
    "X-Content-Type-Options": "nosniff"
}

app.get('/api/images', (req, res) => {
    fetch('https://api.unsplash.com/collections/827807/photos', { headers })
    .then(res => res.json())
    .then(data => {
        let images = []
        data.map(x => {
            let { id, urls: {raw, small}, user: {name}, gridSize = raw + '&w=300&dpi=200'} = x
            let obj = {id, raw, small, name, gridSize }
            images.push(obj)
        })
        return res.send(images)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/api/image/:id', (req, res) => {
    fetch(`https://api.unsplash.com/photos/${req.params.id}/statistics`, { headers })
    .then(res => res.json())
    .then(data => {
        let { downloads, views } = data
        res.send({downloads, views})
    })
    .catch(err => {
        console.log(err)
    })
})

app.listen(port, () => console.log(`Sever running on port ${port}`))