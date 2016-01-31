import {inject, customAttribute,bindable} from 'aurelia-framework';

@customAttribute('p-inputtext')
@inject(Element)
export class InputTextAttribute {
  @bindable disabled: boolean;

  constructor(element){
    this.element=element;
  }

  attached(){
    console.log('attaching text, disabled: ' + this.disabled)
    $(this.element).puiinputtext({
      disabled: this.disabled
    });
  }

  detached(){
      $(this.element).puiinputtext('destroy');
  }
}
