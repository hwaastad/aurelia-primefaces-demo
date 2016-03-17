import {inject, customElement,bindable} from 'aurelia-framework';
import {Message} from '../api/message';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

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
