function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let unit = document.getElementById("unitSelect").value;
    let resultElement = document.getElementById("result");

    if (tempInput === "") {
        resultElement.innerHTML = "Please enter a temperature!";
        return;
    }

    let temp = parseFloat(tempInput);
    let convertedValue = "";

    if (unit === "C") {
        let fahrenheit = celsiusToFahrenheit(temp);
        let kelvin = celsiusToKelvin(temp);
        convertedValue = `Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>Kelvin: ${kelvin.toFixed(2)} °K`;
    } else if (unit === "F") {
        let celsius = fahrenheitToCelsius(temp);
        let kelvin = celsiusToKelvin(celsius);
        convertedValue = `Celsius: ${celsius.toFixed(2)} °C<br>Kelvin: ${kelvin.toFixed(2)} °K`;
    } else if (unit === "K") {
        let celsius = kelvinToCelsius(temp);
        let fahrenheit = kelvinToFahrenheit(temp);
        convertedValue = `Celsius: ${celsius.toFixed(2)} °C<br>Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    }
    
    resultElement.innerHTML = convertedValue;
}