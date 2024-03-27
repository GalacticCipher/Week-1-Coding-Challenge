// This function calculates the letter grade based on the entered student marks.
function showResult() {

    let studentMarks = document.querySelector("#studentMarks").ariaValueMax;

    let gradeElement = document.getElementById("grade");
    console.log(gradeElement);

    console.log(studentMarks);

//Determines the grade based on the marks scored by the student using a series of unconditional statements

    if(studentMarks >= 79) {

        grade = "A";

    }
    else if(studentMarks >=60) {

        grade = "B";

    }
    else if (studentMarks >=49) {

        grade = "C";

    }
    else if(studentMarks >=40) {

        grade = "D";

    }
    else {

        grade = "E";
    }

    //Showcase calculated grade on webpage
    gradeResult.textContent = 'The grade is ${grade}';

    //The input should be a number between 0 and 100
    if(isNaN(marks) || marks < 0 || marks > 100) {
        gradeResult.textContent = 
        "Invalid marks. Please enter a number between 0 and 100.";
        return;
    }

    
}