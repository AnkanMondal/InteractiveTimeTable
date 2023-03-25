const express = require('express')
const route = express.Router()
const controller = require('./controller')
const axios = require('axios')

route.get('/', (req, res) => {
    axios.get('http://localhost:3000/api/dept_db')
        .then(function (response) {
            res.render('index', { users: response.data })
        })
        .catch(err => {
            res.send(err)
        })
})

route.post('/api/dept_db', controller.create)

route.get('/api/dept_db', controller.find)

module.exports = route