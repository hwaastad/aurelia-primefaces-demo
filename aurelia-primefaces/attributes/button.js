import {inject, customAttribute,bindable} from 'aurelia-framework';
/*import 'jquery-ui';
import 'primeui';
import 'primeui/primeui-min.css!';*/

@customAttribute('p-button')
@inject(Element)
export class ButtonDirective {
  @bindable icon: String;
  @bindable iconPos: String;
  @bindable disabled: Boolean;

  initialized: Boolean;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  bind(){
    console.log('binding primebutton');
    var ss = this.dest;
    $(this.element).puibutton({
      icon: this.icon,
      iconPos:this.iconPos,
    });
    this.initialized=true;
  }

  detached() {
    console.log("detached primebutton");
    $(this.element).puibutton('destroy');
    this.initialized=false;
  }
}
