// This function calculates net salary based of a person based on basic salary,benefits and various deductions.
function calcSalary() {

    let basicSalary = document.querySelector("#basicSalary").ariaValueMax;
    let benefits = document.querySelector("#benefits").ariaValueMax;

    console.log(basicSalary);
    console.log(benefits);

// Deduct the benefits from basic salary to get taxable income
    let taxableIncome = (basicSalary - benefits);


    console.log("Taxable Income: ",taxableIncome);

    document.getElementById("taxIncome").innerHTML = taxableIncome;

//Calculate the tax
    if(taxableIncome=24000) {
        tax = Math.floor(taxableIncome *0.1);
    }
    else if (taxableIncome > 24000 && taxableIncome <= 32333) {
        tax = Math.floor(taxableIncome *0.25);
    }
    else if(taxableIncome > 32333 && taxableIncome <= 500000) {
        tax = Math.floor(taxableIncome * 0.3);
    }
    else if(taxableIncome > 500000 && taxableIncome <= 800000) {
        tax =  Math.floor(taxableIncome * 0.325);
    }
    else {
        tax = Math.floor(taxableIncome * 0.35);

        return tax;
    }

    console.log("tax", tax);

    document.getElementById("tax").innerHTML = tax;

    //Calculate nhifDeductions based on the income bracket

    if (taxableIncome <= 5999) {
         nhifDeductionDeduction = 150;

    } else if (taxableIncome <= 7999) {
        nhifDeductionDeduction = 300;

    }else if (taxableIncome <= 11999) {
        nhifDeduction = 600;

    }else if (taxableIncome <= 24999) {
        nhifDeductionDeduction = 750;

    }else if (taxableIncome <=29999) {
        nhifDeductionDeduction = 850;

    }else if (taxableIncome <=34999) {
        nhifDeductionDeduction = 900;

    }else if (taxableIncome <=39999) {
        nhifDeductionDeduction = 950;

    }else {
        nhifDeductiondeduction = 1000;
    }

    console.log("NHIF", nhifDeduction);

    document.getElementById("NHIF").innerHTML = nhifDeduction;

//The old rate standard NSSF contribution is 1080

    let nssfContribution = 1080;

    console.log("NSSF", nssfContribution);

    document.getElementById("nssf").innerHTML = nssfContribution;

//Calculate the net salary by subtracting NHIF,NSSF and tax from the monthly gross pay

    let netSalary =  taxableIncome - (nssfContribution + nhifDeduction + tax)

    console.log("Net Salary" , netSalary);

    document.getElementById("netSalary");

    document.getElementById("netSalary").innerHTML = netSalary;


}