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
route.get('/assign_faculty', services.assignFaculty)

// API
route.post('/api/dept_db', controller.create)
route.get('/api/dept_db', controller.find)

module.exports = route