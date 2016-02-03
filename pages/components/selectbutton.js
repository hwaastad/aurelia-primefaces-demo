import {SelectItem} from '../../aurelia-primefaces/api/selectitem';

export class DemoSelectButton {
  types: SelectItem[];

  selectedType: string;

  selectedTypes: string[] = ['Apartment','Studio'];

  constructor() {
    this.types = [];
    this.types.push({label: 'Apartment', value: 'Apartment'});
    this.types.push({label: 'House', value: 'House'});
    this.types.push({label: 'Studio', value: 'Studio'});
  }

  clear() {
    console.log('clearing atts');
    this.selectedType = null;
    this.selectedTypes = [];
  }
}
