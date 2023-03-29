const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    t_name: {
        type: 'string',
        required: true
    },
    dept: {
        type: 'string',
        required: true
    },
    sem: {
        type: 'string',
        required: true
    },
    course: {
        type: 'string',
        required: true
    },
    timing: {
        type: 'string',
        required: true
    },
    room: {
        type: 'string',
        required: true
    }
})

const db = mongoose.model('faculty', schema)

module.exports = db