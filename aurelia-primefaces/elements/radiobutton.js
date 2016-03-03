import {inject, customElement, ObserverLocator, bindable, computedFrom} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

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
