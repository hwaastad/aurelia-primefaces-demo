import {inject, customElement,bindable} from 'aurelia-framework';

@customElement('p-radio')
@inject(Element)
export class RadioButtonComponent {
  @bindable value: any;
  @bindable name: string;
  @bindable disabled: boolean;
  @bindable model: any;
  @bindable click;

  constructor(element){
    this.element=element;
  }

  onClick(input) {
    input.checked = true;
    console.dir(input.checked);
    //this.model = input.;
  }

  modelChanged(){
    console.log('model has changed...');
  }

  isChecked(){
    console.log('checking ' + this.value + '=' + this.model);
    if(this.value===this.model){
      return true;
    } else {
      return false;
    }
    //returning (this.value == this.model);
    //return this.value == this.model;
  }
}
