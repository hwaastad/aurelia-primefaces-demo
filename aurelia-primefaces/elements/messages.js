import {inject, customElement,bindable} from 'aurelia-framework';
import {Message} from '../api/message';

@customElement('p-messages')
@inject(Element)
export class MessagesComponent {
  @bindable value: Message[];
  @bindable closable: boolean = true;
  @bindable notEmpty = true;

  constructor(element){
    this.element=element;
  }
  getSeverityClass() {
    return this.value[0].severity;
  }

  clear(event) {
    this.value=[];
    event.preventDefault();
  }

  valueChanged(){
    this.notEmpty=this.value && this.value.length > 0;
    console.dir(this.value);
  }
}
