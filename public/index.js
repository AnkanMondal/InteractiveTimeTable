function populate(dept_name, sem) {
    var dSel = document.getElementById("dept_name")
    var sSel = document.getElementById("sem")
    var sem = ""
    sSel.innerHTML = ""
    if (dSel.value == "mca") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4', 'sem5|Sem 5', 'sem6|Sem 6']
    } else if (dSel.value == "mTech") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4']
    } else if (dSel.value == "bTech") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4', 'sem5|Sem 5', 'sem6|Sem 6', 'sem7|Sem 7', 'sem8|Sem 8']
    } else if (dSel.value == "mSc") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4']
    } else {
        var optionArray = ['select_semester|Select Semester']
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option")
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        sSel.options.add(newOption)
    }
}

res.render('index', { message: "Hello" })

function displayRes(sem, dept_name) {
    var dSel = document.getElementById("dept_name")
    var sSel = document.getElementById("sem")
    var resultDiv = document.getElementById("result")
    resultDiv.innerHTML = "You have selected " + dSel.value + " department " + sSel.value
    /*
    if (dSel.value == "mca" && sSel.value == "sem1") {
        diplay the timetable of department mca sem 1
    }
    */
}