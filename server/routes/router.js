const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', controller.homeRoutes)

/**
 *  @description Assign Faculty
 *  @method GET /assign_faculty
 */
route.get('/faculty', controller.assignFaculty)

// API
route.post('/api/faculty', controller.create)
route.get('/api/faculty', controller.find)
route.get('/api/teacher', controller.assignFaculty)

module.exports = route