const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    sem: {
        type: 'string',
        required: true
    },
    dept: {
        type: 'string',
        required: true
    },
    dept_sem: {
        type: 'string',
        required: true
    }
})

const db = mongoose.model('semester', schema)

module.exports = db