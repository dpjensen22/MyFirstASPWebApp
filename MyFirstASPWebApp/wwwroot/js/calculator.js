/*/*This calculator wont work for some reason and it cant figure it out.*/*/

function calculate() {

    var A = $("#assignments").val;
    var GP = $("#groupprojects").val;
    var Q = $("#quizzes").val;
    var E = $("#exams").val;
    var I = $("#intex").val;
    var FG = 0;
    var FLG = "";

    FG = (((parseFloat(A) * .55) + (parseFloat(GP) * .05) + (parseFloat(Q) * .1) + (parseFloat(E) * .2) + (parseFloat(I) * .1)) * 100)

    if (FG >= 94)
        FLG = "A+";
    else if (FG >= 90)
        FLG = "A";
    else if (FG >= 87)
        FLG = "B+";
    else if (FG >= 84)
        FLG = "B";
    else if (FG >= 80)
        FLG = "B-";
    else if (FG >= 77)
        FLG = "C+";
    else if (FG >= 74)
        FLG = "C";
    else if (FG >= 70)
        FLG = "C-";
    else if (FG >= 67)
        FLG = "D+";
    else if (FG >= 64)
        FLG = "D";
    else if (FG >= 60)
        FLG = "D-";
    else FLG = "F";

    $('showdatap').innerHTML = FG;
    $('showdatalg').innerHTML = FLG;
}