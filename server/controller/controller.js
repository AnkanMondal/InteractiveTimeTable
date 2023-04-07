var facultyModel = require('../model/faculty_schema')
var departmentModel = require('../model/department_schema')
var teacherModel = require('../model/teacher_schema')
const semesterModel = require('../model/semester_schema')
const courseModel = require('../model/course_schema.js')
const axios = require('axios')
const index = require('../../public/js/index')

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

async function getDepartments() {
    try {
        const departments = await departmentModel.find({})
        // res.status(200).send({ sucess: true, message: 'Department data', data: departments })
        // console.log(`Departments`, departments)
        return departments
    } catch (err) {
        res.status(400).send({ sucess: false, message: "Error while fetching departments' data" })
    }
}

async function getTeachers() {
    try {
        const teachers = await teacherModel.find({})
        // res.status(200).send({ sucess: true, message: 'Teacher data', data: teachers })
        // console.log(`Teachers`, teachers)
        return teachers
    } catch (err) {
        console.log("Error while fetching teachers' data")
    }
}

async function getTeachers() {
    try {
        const teachers = await teacherModel.find({})
        // res.status(200).send({ sucess: true, message: 'Teacher data', data: teachers })
        // console.log(`Teachers`, teachers)
        return teachers
    } catch (err) {
        console.log("Error while fetching teachers' data")
    }
}

async function getSemesters() {
    try {
        const semesters = await semesterModel.find({})
        // res.status(200).send({ sucess: true, message: 'Teacher data', data: teachers })
        // console.log(`Teachers`, teachers)
        return semesters
    } catch (err) {
        console.log("Error while fetching semester data")
    }
}

async function getCourses() {
    try {
        const courses = await courseModel.find({})
        // res.status(200).send({ sucess: true, message: 'Teacher data', data: teachers })
        // console.log(`Teachers`, teachers)
        return courses
    } catch (err) {
        console.log("Error while fetching course data")
    }
}

exports.homeRoutes = (req, res) => {
    // make a get request to /api/faculty
    axios.get('http://localhost:3000/api/faculty')
        .then(function (response) {
            res.render('index', { users: response.data })
        })
        .catch(err => {
            res.send(err)
        })
}

// exports.assignFaculty = async (req, res) => {
//     const departments = await getDepartments()
//     const selectedDept = req.query.dept || departments[0].dept
//     // console.log('Selected department: ' + selectedDept)
//     const renderTeacher = async (dept) => {
//         const teachers = await getTeachers(dept)
//         // console.log(teachers)
//         res.render('faculty', {
//             departments: departments,
//             teachers: teachers
//         })
//     }
//     await renderTeacher(selectedDept)
// }

exports.assignFaculty = async (req, res) => {
    const departments = await getDepartments()
    const teachers = await getTeachers()
    const semesters = await getSemesters()
    const courses = await getCourses()
    res.render('faculty', {
        departments: departments,
        teachers: teachers,
        semesters: semesters,
        courses: courses
    })
}