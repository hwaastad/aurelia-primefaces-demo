import {inject, customAttribute,bindable} from 'aurelia-framework';

@customAttribute('p-button')
@inject(Element)
export class ButtonDirective {
  @bindable icon: String;
  @bindable iconPos;
  @bindable disabled: Boolean;

  initialized: Boolean;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  attached(){
    console.log('attaching primebutton, position: ' + this.iconPos);
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
