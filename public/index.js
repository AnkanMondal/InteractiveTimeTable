// const deptSelect = document.getElementById('dropdown1')
// const teacherSelect = document.getElementById('dropdown2')

// deptSelect.addEventListener('change', () => {
//     const selectedDept = deptSelect.value
//     fetch(`/teachers?dept=${selectedDept}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log('Selected department:', selectedDept)
//             // Clear the teacher select menu
//             teacherSelect.innerHTML = selectedDept
//             // Populate the teacher select menu with the teachers from the selected department
//             data.forEach(teacher => {
//                 if (teacher.dept === selectedDept) {
//                     const option = document.createElement('option')
//                     option.text = teacher.name
//                     option.value = teacher._id
//                     teacherSelect.appendChild(option)
//                 }
//             })
//         })
//         .catch(error => console.error(error))
// });

function deptSelect() {
    const selectedDept = document.getElementById('dropdown1').value
    // const selectedDept = B.Tech.
    // console.log(`Selected department:`)
    // document.write(`${selectedDept}`)
    // const teacherSelect = document.getElementById('dropdown2')
    // document.write(`api/teacher?dept=${selectedDept}`)
    fetch(`http://localhost:3000/api/teacher?dept=${selectedDept}`)
        // .then(response => response.json())
        // .then(data => {
        //     const teachers = data.t_name
        //     document.write(teachers)
        // })
        // .catch(error => console.error(error))
        // const teachers = await teacherModel.find({ dept: selectedDept })
        // res.render('faculty', {teachers: "hi"})
        // console.log(`Selected teachers`,  teachers)
        // res.status(200).send({ sucess: true, message: 'Teacher data', data: teachers })
    // console.log('response')
    // const data = response.json();
    // document.write(data);
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Selected department:', selectedDept)
    //         // Clear the teacher select menu
    //         teacherSelect.innerHTML = selectedDept
    //         // Populate the teacher select menu with the teachers from the selected department
    //         data.forEach(teacher => {
    //             if (teacher.dept === selectedDept) {
    //                 const option = document.createElement('option')
    //                 option.text = teacher.name
    //                 option.value = teacher._id
    //                 teacherSelect.appendChild(option)
    //             }
    //         })
    //     })
    //     .catch(error => console.error(error))
}