const axios = require('axios')
const controller = require('../controller/controller')

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

exports.assignFaculty = async (req, res) => {
    const departments = await controller.getDepartments(req, res)
    const selectedDept = await controller.selectedDepartment(req, res)
    console.log('Selected department: ' + selectedDept)
    const teachers = []
    res.render('faculty', {
        departments: departments,
        teachers: teachers
    })
}