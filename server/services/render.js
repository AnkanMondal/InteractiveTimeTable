const axios = require('axios')
const controller = require('../controller/controller')
// const { getTeachers } = require('../controller/controller')
// const index = require('../../public/index')

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
    // pass departments to faculty.ejs
    const departments = await controller.getDepartments(req, res)
    // const selectedDept = req.query.dept
    // let teachers = []
    // const teachers = await getTeachers(req, res)
    // const teachers = await controller.getTeachers(req, res)
    // try {
    //     const response = await axios.get(`http://localhost:3000/api/teacher?dept=${selectedDept}`);
    //     teachers = response.data;
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Error fetching teachers');
    //     return;
    // }

    // res.render('faculty', { departments: departments , teachers: teachers })
    // axios.get('http://localhost:3000/api/teacher')
    // .then(function (response) {
        // res.render('faculty', { departments: departments,teachers: response.data })
    // })
    // .catch(err => {
    //     res.send(err)
    // })
    // console.log(`Teacher data`, departments)
    // console.log(`Selected teachers`, teachers)
    // res.render('faculty', {
    //     departments: departments
    //     teachers: teachers
    // })
    const response = await axios.get('http://localhost:3000/api/teacher')
    const teachers = response.data
    console.log(teachers)
res.render('faculty', {
        departments: departments,
        teachers: teachers
    })
        // .then(function (response) {
        //     res.render('faculty', { departments: departments, teachers: response.data })
        // })
        // .catch(err => {
        //     res.send(err)
        // })
}

// exports.assignFaculty = async (req, res) => {
//     try {
//         // make a get request to /api/faculty to retrieve faculty data
//         const facultyResponse = await axios.get('http://localhost:3000/api/faculty');
//         const facultyData = facultyResponse.data;

//         // perform other operations using the retrieved faculty data
//         // ...

//         // send response to client
//         res.send({ message: "Faculty data retrieved successfully" });
//     } catch (error) {
//         res.status(500).send({ message: "Error retrieving faculty data" });
//     }
// }