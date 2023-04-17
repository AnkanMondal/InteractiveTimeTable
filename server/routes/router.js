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
 *  @method GET /faculty
 */
route.get('/faculty', controller.assignFaculty)

/**
 *  @description Display Time-Table
 *  @method GET /display
 */
route.get('/display', controller.displayTimeTable)

/**
 *  @description About Project
 *  @method GET /about
 */
route.get('/about', controller.about)

// api
route.post('/api/faculty', controller.create)
route.get('/api/faculty', controller.find)
route.get('/api/teacher', controller.assignFaculty)

module.exports = route