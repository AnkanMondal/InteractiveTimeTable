const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connectDb = require('./server/database/connection')
const app = express()

dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))

// mongodb connection
connectDb()

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs")

// load assets
app.use('/public', express.static('public'))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })