import BrunoConverter from './BrunoConverter';
import { IConverter } from './IConverter';
import RestClientConverter from './RestClientConverter';

class ConverterCollection {
  constructor() {
    this.converters.push(new RestClientConverter());
    this.converters.push(new BrunoConverter());
  }

  converters: IConverter[] = [];

  getSelectedConverter(): IConverter | undefined {
    return this.converters.find((c) => c.isSelected === true);
  }

  setSelectedConverter(name: string): void {
    for (const converter of this.converters) {
      converter.isSelected = converter.name === name;
    }
  }
}

export default ConverterCollection;
