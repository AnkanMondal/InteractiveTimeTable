const axios = require('axios')
const controller = require('../controller/controller')

exports.homeRoutes = (req, res) => {
    // make a get request to /api/debt_db
    axios.get('http://localhost:3000/api/faculty')
        .then(function (response) {
            res.render('index', { users: response.data })
        })
        .catch(err => {
            res.send(err)
        })
}

exports.assignFaculty = async (req, res) => {
    // pass departments to faculty.ejs
    const departments = await controller.getDepartments(req, res)
    res.render('faculty', { departments })
}