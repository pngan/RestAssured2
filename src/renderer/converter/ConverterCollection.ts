import BrunoConverter from './BrunoConverter';
import RestClientConverter from './RestClientConverter';

class ConverterCollection {
  constructor() {
    this.converters.push(new RestClientConverter());
    this.converters.push(new BrunoConverter());
  }

  converters = [];

  getSelectedConverter() {
    return this.converters.find((c) => c.isSelected === true);
  }

  setSelectedConverter(name) {
    for (const converter of this.converters) {
      converter.isSelected = converter.name === name;
    }
  }
}

export default ConverterCollection;
