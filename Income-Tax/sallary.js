/*function to calculate net salary*/
function calculateNetSalary(){
    /*define variables and their values*/
    let basicSalary=parseFloat(document.getElementById("basic-salary").value);
    let benefits=parseFloat(document.getElementById("benefits").value);


// calculate NHIF and NSSF Deductions, PAYE, gross and netsalary.
    /*nhif*/
    let nhifDeductions = Math.floor(basicSalary * 0.02);
    /*nssf*/
    let nssfDeductions = Math.floor(basicSalary * 0.12);
    /*payee*/
    let payee = Math.floor((basicSalary + benefits) * 0.25);
    /*grosSalary*/
    let grossSalary = Math.floor(basicSalary + benefits);
    /*netSalary*/
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    /*create result to show net salary*/
    let result=document.getElementById("result");
    resultElement.innerHTML = `
      <p>Your P.A.Y.E is ${payee}</p>
      <p>Your gross salary is ${grossSalary}</p>
      <p>Your NHIF Deduction is ${nhifDeductions}</p>
      <p>Your NSSF Deduction is ${nssfDeductions}</p>
      <p>Your net salary is: Ksh. ${netSalary}</p>
      `;
  }
  /*add calculate button*/
  let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateNetSalary);