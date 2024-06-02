function CircleArea() {
            let radius = prompt("Enter the radius of the circle:");

            if (!isNaN(radius)) {
                let area = Math.PI * Math.pow(radius, 2);
                alert("The area of the circle with radius " + radius + " is " + area);
            } 
            else {
                alert("invalid number");
            }
        }
        CircleArea() ;

function SquareRoot() {

            let value = prompt("Enter a value to calculate its square root:");
            if (!isNaN(value)) {
                let squareRoot = Math.sqrt(value);
                alert("The square root of " + value + " is " + squareRoot);
            }
             else {
                alert("invalid number");
            }
        }
        SquareRoot();

    function CosineDeg() {
        let angle = prompt("Enter an angle (in degrees) to calculate its cosine:");
    if (!isNaN(angle)) {
        let radians = angle * (Math.PI / 180);
        let cosineValue = Math.cos(radians);
        document.write("The cosine of " + angle + " is " + cosineValue);
    } else {
        alert("invalid number");
    }
}
        CosineDeg();
   
