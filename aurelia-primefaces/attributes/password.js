import {inject, customAttribute,bindable} from 'aurelia-framework';

@customAttribute('p-password')
@inject(Element)
export class PasswordAttribute {
  @bindable promptLabel:string = undefined;
  @bindable weakLabel: string = undefined;
  @bindable goodLabel: string = undefined;
  @bindable strongLabel: string = undefined;
  @bindable inline: boolean = undefined;
  @bindable disabled: boolean = undefined;

  constructor(element){
    this.element=element;
  }

  attached(){
    $(this.element).puipassword({
      promptLabel: this.promptLabel,
      weakLabel: this.weakLabel,
      goodLabel: this.goodLabel,
      strongLabel: this.strongLabel,
      inline: this.inline
    })
  }

  detached(){
    $(this.element).puipassword('destroy');
  }
}
