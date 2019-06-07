const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello from Server")
})

app.listen(port, () => console.log(`Sever running on port ${port}`))