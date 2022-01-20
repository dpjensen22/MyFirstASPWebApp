$("#submit").click(function () {
    finalPercent =
        ($("#assignments").val() * .55 +
        $("#groupprojects").val() * .05 +
        $("#quizzes").val() * .10 +
        $("#exams").val() * .20 +
        $("#intex").val() * .10)

    if (finalPercent >= 94) {
        letterGrade = "A"
    } else if (finalPercent >= 90) {
        letterGrade = "A-"
    } else if (finalPercent >= 87) {
        letterGrade = "B+"
    } else if (finalPercent >= 84) {
        letterGrade = "B"
    } else if (finalPercent >= 80) {
        letterGrade = "B-"
    } else if (finalPercent >= 77) {
        letterGrade = "C+"
    } else if (finalPercent >= 74) {
        letterGrade = "C"
    } else if (finalPercent >= 70) {
        letterGrade = "C-"
    } else if (finalPercent >= 67) {
        letterGrade = "D+"
    } else if (finalPercent >= 64) {
        letterGrade = "D"
    } else if (finalPercent >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    alert(finalPercent + "% " + letterGrade)
})