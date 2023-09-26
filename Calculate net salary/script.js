function totalIncome(){
    let totalIncome=0;
    if (salary!==null && benefits !==null){
        if (salary>=0 &&benefits>=0){
            totalIncome=salary+benefits;
        }
    }
    return totalIncome;
    
};
	function NSSF(){
        let Deduction=0;
        if(nssDeduct){
            deduction=nssfDeduction();
        }else{
            deduction=0;
        }
        return deduction;

    };
    function NHIF(){
        let deduction=0;
        if(nhifDeduct){
            deduction=nhifDeduction();
        }else{
            deduction=0;
        }
        return deduction;
    };
    function nssfDeduction(){
        let salary=totalIncome();
        let nssf=0;
        if(nssfDeduct){
            nssf=salary*0.06;
            }
            return nssf;
        };
    const nhifDeduction=()=>{
        let salary=totalIncome();
        let nhif=0;
        if(salary>=1000)
        if (salary >= 1000 && salary <= 5999) {
            nhif = 150;
        } else if (salary >= 6000 && salary <= 7999) {
            nhif = 300;
        } else if (salary >= 8000 && salary <= 11999) {
            nhif= 400;
        } else if (salary >= 12000 && salary <= 14999) {
            nhif= 500;
        } else if (salary >= 15000 && salary <= 19999) {
            nhif+= 600;
        } else if (salary >= 20000 && salary <= 24999) {
            nhif= 750;
        } else if (salary >= 25000 && salary <= 29999) {
            nhif= 850;
        } else if (salary >= 30000 && salary <= 34999) {
            nhif= 900;
        } else if (salary >= 35000 && salary <= 39999) {
            nhif= 950;
        } else if (salary >= 40000 && salary <= 44999) {
            nhif= 1000;
        } else if (salary >= 45000 && salary <= 49999) {
            nhif= 1100;
        } else if (salary >= 50000 && salary <= 59999) {
            nhif= 1200;
        } else if (salary >= 60000 && salary <= 69999) {
            nhif = 1300;
        } else if (salary >= 70000 && salary <= 79999) {
            nhif = 1400;
        } else if (salary >= 80000 && salary <= 89999) {
            nhif = 1500;
        } else if (salary >= 90000 && salary <= 99999) {
            nhif = 1600;
        } else if (salary >= 100000) {
            nhif = 1700;
        }   
        return nhif;
    
    };
    function personalRelief(){
    let relief=0;
    if(monthly){
        relief=2400;
    }else{
        relief=28800
    }
    return relief;
};
    function  totalIncomeAfterPension(){
    let incomeAfterPension=totalIncome()-nssffDeduction();
    return incomeAfterPension;
};
function benefits(){
    if(benefits !==null&&benefits>0){console.log("benefits");
}else{

}document.write(0);
};
function taxableIncome(){
    let taxableIncome=totalIncome()-nssfDeduction();
    return taxableIncome;
};

function taxableIncomeTax(){
    let taxAmountOnIncome=0;
    let income=totalIncome();
    if ((income<=12,298)){
        taxAmountOnIncome=income*0.1;
    } else if (income>= 12999 && income<= 23885) {
        taxAmountOnIncome= income * 0.15;
    } else if (income>= 23886 && income<= 35472) {
        taxAmountOnIncome= income* 0.2;
    } else if (income>= 35473 && income<= 47059) {
        taxAmountOnIncome = Income* 0.25;
    } else if (TaxAmountOnIncome> 47059) {
        taxAmountOnIncome = Income * 0.3;
    }
    return taxAmountOnIncome;

};

function getTaxRelief(){
    let taxAmountOnRelief=taxableIncome()-personalRelief();
    return taxAmountOnRelief;
};
const getPAYE=()=>{
    let payeAmount=taxableIncomeTax()-personalRelief();
    return payeAmount;
};
function taxableIncome(){
    let taxableIncome=totalIncome()-nssfDeduction();
    return taxableIncome;
};
function netPay(){
    let paye=getPAYE();
    let nssf=nssfDeduction();
    let nhif=nhifDeduction();
    let relief=personalRelief();
    let grosspay=totalIncome();
    let netPay=grosspay-(paye+nssf+nhif+relief);
    return netPay;
};
function calculate(){
    totalIncome();
    nssfDeduction();
    nhifDeduction();
    taxableIncome();
    personalRelief();
    netPay();
    getPAYE();
    taxableIncomeTax();
    taxAmountOnRelief();
    benefits();
};
console.log(totalincome);
console.log(netPay);
calculate();
    