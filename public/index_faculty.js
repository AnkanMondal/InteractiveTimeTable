function populateSem() {
    var dropdown1 = document.getElementById("dropdown1")
    var dropdown2 = document.getElementById("dropdown2")
    var selectedOption = dropdown1.value
    dropdown2.innerHTML = ""
    if (selectedOption == "MCA") {
        var optionArray = ['Choose Semester|Choose Semester', 'Sem 1|Sem 1', 'Sem 2|Sem 2', 'Sem 3|Sem 3', 'Sem 4|Sem 4', 'Sem 5|Sem 5', 'Sem 6|Sem 6']
    } else if (selectedOption == "M.Tech.") {
        var optionArray = ['Choose Semester|Choose Semester', 'Sem 1|Sem 1', 'Sem 2|Sem 2', 'Sem 3|Sem 3', 'Sem 4|Sem 4']
    } else if (selectedOption == "B.Tech.") {
        var optionArray = ['Choose Semester|Choose Semester', 'Sem 1|Sem 1', 'Sem 2|Sem 2', 'Sem 3|Sem 3', 'Sem 4|Sem 4', 'Sem 5|Sem 5', 'Sem 6|Sem 6', 'Sem 7|Sem 7', 'Sem 8|Sem 8']
    } else if (selectedOption == "M.Sc.") {
        var optionArray = ['Choose Semester|Choose Semester', 'Sem 1|Sem 1', 'Sem 2|Sem 2', 'Sem 3|Sem 3', 'Sem 4|Sem 4']
    } else {
        var optionArray = ['Choose Semester|Choose Semester']
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option")
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        dropdown2.options.add(newOption)
    }
}

function populateCourse() {
    var dropdown1 = document.getElementById("dropdown1")
    var dropdown2 = document.getElementById("dropdown2")
    var dropdown3 = document.getElementById("dropdown3")
    const selectedOption1 = dropdown1.value
    const selectedOption2 = dropdown2.value
    dropdown3.innerHTML = ""
    if (selectedOption1 == "MCA") {
        if (selectedOption2 == "Sem 1") {
            var optionArray = ['Choose Course|Choose Course', 'MCA Sem 1 Course 1|MCA Sem 1 Course 1', 'MCA Sem 1 Course 2|MCA Sem 1 Course 2']
        } else if (selectedOption2 == "Sem 2") {
            var optionArray = ['Choose Course|Choose Course', 'MCA Sem 2 Course 1|MCA Sem 2 Course 1', 'MCA Sem 2 Course 2|MCA Sem 2 Course 2']
        } else if (selectedOption2 == "Sem 3") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else if (selectedOption2 == "Sem 4") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else if (selectedOption2 == "Sem 5") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else if (selectedOption2 == "Sem 6") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else {
            var optionArray = ['Choose Course|Choose Course']
        }
    }
    if (selectedOption1 == "B.Tech.") {
        if (selectedOption2 == "Sem 1") {
            var optionArray = ['Choose Course|Choose Course', 'B.Tech. Sem 1 Course 1|B.Tech. Sem 1 Course 1', 'B.Tech. Sem 1 Course 2|B.Tech. Sem 1 Course 2']
        } else if (selectedOption2 == "Sem 2") {
            var optionArray = ['Choose Course|Choose Course', 'B.Tech. Sem 2 Course 1|B.Tech. Sem 2 Course 1', 'B.Tech. Sem 2 Course 2|B.Tech. Sem 2 Course 2']
        } else if (selectedOption2 == "Sem 3") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else if (selectedOption2 == "Sem 4") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else if (selectedOption2 == "Sem 5") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else if (selectedOption2 == "Sem 6") {
            var optionArray = ['Choose Course|Choose Course', 'QWE789|QWE789', 'QW78|QW78']
        } else {
            var optionArray = ['Choose Course|Choose Course']
        }
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option")
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        dropdown3.options.add(newOption)
    }
}