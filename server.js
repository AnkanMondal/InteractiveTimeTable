const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const connectDB = require('./connection')

app.use('/public', express.static('public'))

app.set("view engine", "ejs")

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use('/', require('./router'))

connectDB()

app.listen(port, () => {
    console.log('Listening on port ' + port)
})