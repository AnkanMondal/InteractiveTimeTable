var facultyModel = require('../model/faculty_schema')
var departmentModel = require('../model/department_schema')
var teacherModel = require('../model/teacher_schema')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

// create and save a new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can\'t be empty' })
        return
    }
    // new user
    const user = new facultyModel({
        t_name: req.body.t_name,
        dept: req.body.dept,
        sem: req.body.sem,
        course: req.body.course,
        timing: req.body.timing,
        room: req.body.room
    })
    // save data in mongodb
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/faculty')
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Something went wrong while saving data' })
        })
}

// retrive user(s)
exports.find = (req, res) => {
    // if id is provided then return a single user else return multiple users
    if (req.query.id) {
        const id = req.query.id
        facultyModel.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id })
            })
    } else {
        facultyModel.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || 'Something went wrong while retrieving data' })
            })
    }
}

exports.getDepartments = async (req, res) => {
    try {
        const departments = await departmentModel.find({})
        // res.status(200).send({ sucess: true, message: 'Department data', data: departments })
        // console.log(`Departments`, departments)
        return departments
    } catch (err) {
        res.status(400).send({ sucess: false, message: "Error while fetching departments' data" })
    }
}

exports.selectedDepartment = async (req, res) => {
    const selectedDept = req.query.dept
    // console.log('Selected department: ' + selectedDept)
    return selectedDept
}

exports.getTeachers = async (req, res) => {
    try {
    } catch (err) {
        res.status(400).send({ sucess: false, message: "Error while fetching teachers' data" })
    }
}