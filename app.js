const conversionSelect = document.querySelector('.converter__options-select');
const conversionValue = document.querySelector('#conversion-value');
const conversionResults = document.querySelector('#conversion-results');
const convertButton = document.querySelector('.convert-button');

// Formulas
// milhas = quilometros * 0.621371
// °F = (°C * 1.8) + 32
// lbs = kg * 2.20462
// in = in * 2.54

const conversions = {
  distance: value => value * 0.621371,
  temperature: value => value * 1.8 + 32,
  weight: value => value * 2.20462,
  height: value => value * 2.54,
};

class Conversion {
  constructor() {
    convertButton.addEventListener('click', this.handleConversion.bind(this));
  }

  // Converts the given value based on the conversion type
  convertValue(value, conversionType) {
    const convertFunction = conversions[conversionType];
    return convertFunction ? convertFunction(value) : null;
  }

  // Formats the conversion result 
  formatResult(result) {
    return result !== null ? result.toFixed(2) : 'Invalid Conversion Type!';
  }

  // Checks if the input value is a valid number
  checkNumber(value) {
    if (!value && isNaN(value)) {
      conversionResults.value = 'Invalid number!';
      return false;
    }
    return true;
  }

  // Handles the conversion process
  handleConversion() {
    const value = parseFloat(conversionValue.value);

    if (!this.checkNumber(value)) return;

    const conversionType = conversionSelect.value;

    const result = this.convertValue(value, conversionType);
    return (conversionResults.value = this.formatResult(result));
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => new Conversion());
