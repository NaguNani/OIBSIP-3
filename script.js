
    function convertTemperature() {
      // Get user input
      const temperatureInput = parseFloat(document.getElementById('temperature').value);
      const selectedUnit = document.getElementById('unit').value;

      // Perform conversion
      let result;
      if (selectedUnit === 'fahrenheit') {
        result = ((temperatureInput - 32) * 5) / 9;
      } else {
        result = temperatureInput - 273.15; // Kelvin to Celsius
      }

      // Display result
      document.getElementById('result').innerText = `Result: ${result.toFixed(2)} °C`;
    }

