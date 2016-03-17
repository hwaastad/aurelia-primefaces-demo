import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-menu')
@inject(Element)
export class MenuComponent {
  @bindable popup=undefined;
  @bindable trigger=undefined;
  @bindable my=undefined;
  @bindable triggerEvent=undefined;
  @bindable style=undefined;
  @bindable styleClass=undefined;
  
  initialized;
  menuElement;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  attached(){
    this.menuElement = $(this.element).find('> div > ul');
    this.menuElement.puimenu({
      enhanced: true,
      popup: this.popup,
      trigger: this.trigger ? $(this.trigger): null,
      my: this.my,
      at: this.at,
      triggerEvent: this.triggerEvent
    });
    this.initialized = true;
  }

  propertyChanged(property,newValue,oldValue){
    console.log('propertychange.....')
    if(this.initialized){
      this.menuElement.puimenu('option',property,newValue);
    }
  }

  detached() {
    if(this.initialized){
      this.menuElement.puimenu('destroy');
      this.initialized = false;
      this.menuElement = null;
    }
  }
}
