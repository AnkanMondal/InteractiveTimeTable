const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')
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
route.post('/api/faculty', controller.create)
route.get('/api/faculty', controller.find)
route.get('/api/department', controller.getDepartments)
route.get('/api/teacher', controller.getTeachers)

module.exports = route