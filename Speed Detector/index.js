// This function calculates the deduction points based on the vechile's speed and showcases the corresponding points.
function checkSpeed(speed) {
 
    let carSpeed = document.querySelector("#carSpeed").ariaValueMax;

    console.log(carSpeed);

    let result = "OK";
// Determine the message displayed based on the calculated deduction points
    if (carSpeed > 70) {

        let demeritPoints = (carSpeed - 70) / 5;

        console.log(demeritPoints);

        result = "Demerit " + Math.floor(demeritPoints);

        if (demeritPoints > 11 ) {
            result = "License Suspended";
        }
    }

    console.log(result);

    document.getElementById("result").innerHTML = result;
    
}
