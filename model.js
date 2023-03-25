const mongoose = require('mongoose')

// example schema to test if mongodb is working properly
var schema = new mongoose.Schema({
    dept_name: {
        type: 'string',
        required: true
    },
    course_name: {
        type: 'string',
        required: true
    },
    t_name: {
        type: 'string',
        required: true
    }
})

const userDb = mongoose.model('dept_db', schema)

module.exports = userDb