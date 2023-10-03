// Function for calculating grades
function studentGrade(){
  
    // Getting input fdata for score
    const score = dparseInt(document.getElementById("score").value);
      let grade = "";
    
    // Checking the condition for the providing the 
    // grade to student based on student score
  
    if (score> 79) {
      grade = "A";
    } else if (score>= 60 && score<= 79) {
      grade = "B";
    } else if (score>= 50 && score<= 59) {
      grade = "C";
    } else if (score>= 40 && score<= 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    document.getElementById("grade").textContent = `Grade: ${grade}`;
  }
    
    