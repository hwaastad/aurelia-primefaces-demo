import {inject, customElement, ObserverLocator, bindable, computedFrom} from 'aurelia-framework';

@customElement('p-radio')
@inject(Element)
export class RadioButtonComponent {
  element = undefined;
  @bindable model: any;
  @bindable value: any;
  @bindable name: string;

  @bindable checked;

  constructor(element) {
    this.element = element;
  }

  onclick(input) {
    this.model = input.value;
  }

  modelChanged() {
    if (this.value === this.model) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}
