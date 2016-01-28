import {inject, customAttribute,bindable} from 'aurelia-framework';
/*import 'jquery-ui';
import 'primeui';
import 'primeui/primeui-min.css!';*/

@customAttribute('p-inputtext')
@inject(Element)
export class InputTextAttribute {
  @bindable disabled: boolean;

  constructor(element){
    this.element=element;
  }

  attached(){
    $(this.element).puiinputtext({
      disabled: this.disabled
    });
  }

  detached(){
      $(this.element).puiinputtext('destroy');
  }
}
