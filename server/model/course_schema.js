const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    course_id: {
        type: 'string',
        required: true
    },
    sem: {
        type: 'string',
        required: true
    },
    course_name: {
        type: 'string',
        required: true
    }
})

const db = mongoose.model('course', schema)

module.exports = db