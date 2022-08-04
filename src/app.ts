import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Twistagram running'
    })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})