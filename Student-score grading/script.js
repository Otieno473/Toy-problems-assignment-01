/*The calculateGrade function uses a simple conditional if-else statements to return grades.
it determines the grade depending on the student score and it dispay the grade using return function The paragraph element is used to display the grade.*/

function generateStudentGrade() {
  const score = parseInt(document.getElementById("score").value);
  let grade;

  if (score > 79) {
    grade = "A";
  } else if (score>= 60 && score <= 79) {
    grade = "B";
  } else if (score>= 50 && score <= 59) {
    grade = "C";
  } else if (score >= 40 && score<= 49) {
    grade = "D";
  } else {
    grade = "E";
  }

  document.getElementById("grade").textContent = `Grade: ${grade}`;
}
