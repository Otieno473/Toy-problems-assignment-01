// Function for calculating grades
const getGrades= () => {
  
    // Getting input from user into height variable.
    let score = document.querySelector("#studentScore").value;
      let grades = "";
    
    // Checking the condition for the providing the 
    // grade to student based on student score
  
    if (score<= 100 && score>= 80) {
      grades = "A";
    } else if (score <= 79 && score >= 60) {
      grades = "B";
    } else if (score<= 59 && score >= 40) {
      grades = "C";
    } else {
      grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (score== "" ) {
      document.querySelector("#showdata").innerHTML
           = "Please enter score";
    } else {
    
      return grades;
    }
  };