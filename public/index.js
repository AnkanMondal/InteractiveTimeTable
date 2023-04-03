function deptSelect() {
    const selectedDept = document.getElementById('dropdown1').value
    fetch(`http://localhost:3000/api/teacher?dept=${selectedDept}`)
}