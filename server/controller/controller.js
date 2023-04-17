var facultyModel = require('../model/faculty_schema')
var departmentModel = require('../model/department_schema')
var teacherModel = require('../model/teacher_schema')
const semesterModel = require('../model/semester_schema')
const courseModel = require('../model/course_schema.js')
let message

// create and save a new user
exports.create = async (req, res) => {
    try {

        // validate request
        if (!req.body) {
            res.status(400).send({ message: "Content can't be empty" });
            return;
        }

        // check for conflicts
        const teacherConflict = await facultyModel.findOne({
            t_name: req.body.t_name,
            course: req.body.course,
        })

        const roomConflict = await facultyModel.findOne({
            room: req.body.room,
            timing: req.body.timing,
        })

        if (teacherConflict) {
            message = "This course is already assigned to a teacher at the given timing"
            return
        }

        if (roomConflict) {
            res.status(400).send({ message: "Another course is already assigned to this room at the given timing" })
            return
        }

        const courseConflict = await facultyModel.findOne({
            course: req.body.course,
            timing: req.body.timing,
        })

        if (courseConflict) {
            res.status(400).send({ message: "This course is already assigned to a teacher at the given timing" })
            return
        }

        // create a new user
        const user = new facultyModel({
            t_name: req.body.t_name,
            dept: req.body.dept,
            sem: req.body.sem,
            course: req.body.course,
            timing: req.body.timing,
            room: req.body.room,
        });

        // save data in mongodb
        await user.save();
        res.redirect('/faculty');
    } catch (err) {
        res.status(500).send({ message: err.message || 'Something went wrong while saving data' });
    }
};

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

// get the data
async function getDepartments() {
    try {
        const departments = await departmentModel.find({})
        return departments
    } catch (err) {
        res.status(400).send({ sucess: false, message: "Error while fetching departments' data" })
    }
}

async function getTeachers() {
    try {
        const teachers = await teacherModel.find({})
        return teachers
    } catch (err) {
        console.log("Error while fetching teachers' data")
    }
}

async function getSemesters() {
    try {
        const semesters = await semesterModel.find({})
        return semesters
    } catch (err) {
        console.log("Error while fetching semester data")
    }
}

async function getCourses() {
    try {
        const courses = await courseModel.find({})
        return courses
    } catch (err) {
        console.log("Error while fetching course data")
    }
}

exports.homeRoutes = (req, res) => {
    res.render('index')
}

// pass the values and render the faculty page
exports.assignFaculty = async (req, res) => {
    const departments = await getDepartments()
    const teachers = await getTeachers()
    const semesters = await getSemesters()
    const courses = await getCourses()
    res.render('faculty', {
        departments: departments,
        teachers: teachers,
        semesters: semesters,
        courses: courses,
        message: message
    })
}

// pass the values and render the display page
exports.displayTimeTable = async (req, res) => {
    const departments = await getDepartments()
    const semesters = await getSemesters()
    const { dept, sem, timing } = req.query
    console.log(dept + ' ' + sem + ' ' + timing)
    const faculty = await facultyModel.find({
        dept: dept,
        sem: sem,
        timing: timing
    })
    console.log(faculty)
    res.render('display', {
        departments: departments,
        semesters: semesters,
        faculty: faculty
    })
}

// render the about page
exports.about = (req, res) => {
    res.render('about')
}