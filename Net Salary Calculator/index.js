function employeeSalary() {
    var netPay, NHIF, NSSF, PAYE
    netPay = 100000;

    //NHIF is 0.017 of the  netPay
    //NSSF is 0.004 of the netPay
    //PAYE is 0.3 of the netPay

    NHIF = 0.017 * netPay;
    NSSF = 0.004 * netPay;
    PAYE = 0.3 * netPay;
}