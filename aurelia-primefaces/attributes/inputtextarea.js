import {inject, customAttribute,bindable} from 'aurelia-framework';

@customAttribute('p-inputtextarea')
@inject(Element)
export class InputTextAreaAttribute {
  @bindable autoResize: boolean=undefined;
  @bindable disabled: boolean;

  initialized: boolean;

  constructor(element){
    this.element=element;
    this.initialized = false;
  }

  bind(){
    console.log('resize: ' + this.autoResize);
    $(this.element).puiinputtextarea({
      autoResize: this.autoResize
    });
    this.initialized = true;
  }

  detached(){
    $(this.element).puiinputtextarea('destroy');
    this.initialized = false;
  }

}
