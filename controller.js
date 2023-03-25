var userDb = require('./model')

// create and save a new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can\'t be empty' })
        return
    }
    // new user
    const user = new userDb({
        dept_name: req.body.dept_name,
        course_name: req.body.course_name,
        t_name: req.body.t_name
    })
    // save data in mongodb
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500)({ message: err.message || 'Something went wrong while saving data' })
        })
}

// retrive user(s)
exports.find = (req, res) => {
    // if id is provided then return a single user else return multiple users
    if (req.query.id) {
        const id = req.query.id
        userDb.findById(id)
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
        userDb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500)({ message: err.message || 'Something went wrong while retrieving data' })
            })
    }
}