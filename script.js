function convertTemperature() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitOutput = document.getElementById("fahrenheitOutput");
    var fahrenheit = (celsiusInput * 9/5) + 32;
    fahrenheitOutput.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
}


function convertWeight() {
    var kilogramsInput = document.getElementById("kilogramsInput").value;
    var poundsOutput = document.getElementById("poundsOutput");
    
    var pounds = kilogramsInput * 2.20462;
    
    poundsOutput.textContent = "Pounds: " + pounds.toFixed(2);
}

function convertDistance() {
    var kilometersInput = document.getElementById("kilometersInput").value;
    var milesOutput = document.getElementById("milesOutput");
    var miles = kilometersInput * 0.621371;
    
    milesOutput.textContent = "Miles: " + miles.toFixed(2);
} 