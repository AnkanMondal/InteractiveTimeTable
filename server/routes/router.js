const express = require('express')
const route = express.Router()
const faculty_controller = require('../controller/controller_faculty')
const services = require('../services/render')

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes)

/**
 *  @description Assign Faculty
 *  @method GET /assign_faculty
 */
route.get('/faculty', services.assignFaculty)

// API
route.post('/api/faculty', faculty_controller.create)
route.get('/api/faculty', faculty_controller.find)

module.exports = route