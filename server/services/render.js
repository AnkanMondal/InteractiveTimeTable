const axios = require('axios')

exports.homeRoutes = (req, res) => {
    // make a get request to /api/debt_db
    axios.get('http://localhost:3000/api/dept_db')
        .then(function (response) {
            res.render('index', { users: response.data })
        })
        .catch(err => {
            res.send(err)
        })
}

exports.assignFaculty = (req, res) => {
    res.render('assign_faculty')
}