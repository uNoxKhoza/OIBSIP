function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    let convertedTemperature;
    let resultUnit;

    if (unit === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        resultUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
        resultUnit = 'Celsius';
    }

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
