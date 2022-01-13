
function calculate() {

    let A = parseFloat($("#assignments").val())
    let GP = parseFloat($("#groupprojects").val())
    let Q = parseFloat($("#quizzes").val())
    let E = parseFloat($("#exams").val())
    let I = parseFloat($("#intex").val())
    let FG = 0
    let FLG = ""

    FG = (((A * .55) + (GP * .05) + (Q * .1) + (E * .2) + (I * .1)) * 100)

    if (FG >= 94)
        FLG = "A+"
    else if (FG >= 90)
        FLG = "A"
    else if (FG >= 87)
        FLG = "B+"
    else if (FG >= 84)
        FLG = "B"
    else if (FG >= 80)
        FLG = "B-"
    else if (FG >= 77)
        FLG = "C+"
    else if (FG >= 74)
        FLG = "C"
    else if (FG >= 70)
        FLG = "C-"
    else if (FG >= 67)
        FLG = "D+"
    else if (FG >= 64)
        FLG = "D"
    else if (FG >= 60)
        FLG = "D-"
    else FLG = "F"

/*    $("#showdata").innerHTML = 'Your final grade is  ${FG}% whis is a(n) ${FLG}.'*/
    alert = "Your final grade is  " + FG + "% which is a(n) " + FLG + "."
    }