import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-menubar')
@inject(Element)
export class MenuBarComponent {
  @bindable autoDisplay=undefined;
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
    this.menuElement.puimenubar({
      enhanced: true,
      autoDisplay: this.autoDisplay
    });
    this.initialized = true;
  }

  propertyChanged(property,newValue,oldValue){
    console.log('propertychange.....')
    if(this.initialized){
      this.menuElement.puimenubar('option',property,newValue);
    }
  }

  detached() {
    if(this.initialized){
      this.menuElement.puimenubar('destroy');
      this.initialized = false;
      this.menuElement = null;
    }
  }

}
