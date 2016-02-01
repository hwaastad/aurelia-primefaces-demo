import {inject, customElement,bindable} from 'aurelia-framework';
import {Message} from '../api/message';


@customElement('p-growl')
@inject(Element)
export class GrowlComponent {
  @bindable sticky: boolean;
  @bindable life: number;
  @bindable value: Message[];

  initialized: boolean;

  constructor(element){
    this.element=element;
    this.initialized = false;
  }

  attached(){
    $(this.element.children[0]).puigrowl({
      sticky: this.sticky,
      life: this.life,
      appendTo: null,
      messages: this.value
    });
    this.initialized = true;
  }

  detached(){
    $(this.element.children[0]).puigrowl('destroy');
  }

  valueChanged(newValue,oldValue){
    if(this.initialized){
      $(this.element.children[0]).puigrowl('option', 'value', newValue);
    }
  }

}
