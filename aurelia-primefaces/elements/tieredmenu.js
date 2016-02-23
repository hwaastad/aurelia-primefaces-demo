import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-tieredmenu')
@inject(Element)
export class TieredMenuComponent {
  @bindable popup=undefined;
  @bindable trigger=undefined;
  @bindable my=undefined;
  @bindable at=undefined;
  @bindable triggerEvent=undefined;
  @bindable autoDisplay=undefined;
  @bindable style=undefined;
  @bindable styleClass=undefined;

  initialized;
  menuElement;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  attached() {
    this.menuElement = jQuery(this.element).find('> div > ul');
    this.menuElement.puitieredmenu({
      enhanced: true,
      popup: this.popup,
      trigger: this.trigger ? $(this.trigger): null,
      my: this.my,
      at: this.at,
      autoDisplay: this.autoDisplay,
      triggerEvent: this.triggerEvent
    });
    this.initialized = true;
  }

  propertyChanged(property,newValue,oldValue){
    console.log('propertychange.....')
    if(this.initialized){
      this.menuElement.puitieredmenu('option',property,newValue);
    }
  }
  
  detached() {
    if(this.initialized){
      this.menuElement.puitieredmenu('destroy');
      this.initialized = false;
      this.menuElement = null;
    }
  }
}
