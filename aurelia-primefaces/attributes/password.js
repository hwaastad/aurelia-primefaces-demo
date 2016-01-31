import {inject, customAttribute,bindable} from 'aurelia-framework';

@customAttribute('p-password')
@inject(Element)
export class PasswordAttribute {
  @bindable promptLabel:string;
  @bindable weakLabel: string;
  @bindable goodLabel: string;
  @bindable strongLabel: string;
  @bindable inline: boolean;
  @bindable disabled: boolean;

  constructor(element){
    this.element=element;
  }

  bind(){
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
