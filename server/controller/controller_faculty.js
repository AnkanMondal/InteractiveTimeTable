var facultyDb = require('../model/model_faculty')

// create and save a new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can\'t be empty' })
        return
    }
    // new user
    const user = new facultyDb({
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
        facultyDb.findById(id)
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
        facultyDb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500)({ message: err.message || 'Something went wrong while retrieving data' })
            })
    }
}