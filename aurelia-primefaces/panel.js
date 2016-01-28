import {inject, customElement,bindable} from 'aurelia-framework';
//import 'jquery-ui';
//import 'primeui';
//import 'primeui/primeui-min.css!';
//import 'primeui/themes/bootstrap/theme.css!';

@customElement('p-panel')
@inject(Element)
export class PanelComponent {
  @bindable header: String;
  @bindable toggleable: Boolean;
  @bindable closable: Boolean;

  constructor(element){
    this.element=element;
  }

  attached(){
    console.log('closable: ' + this.closable + ' toggleable: ' + this.toggleable);
    //this.closable=false
    $(this.element).puipanel({
      title: this.header,
      toggleable: this.toggleable,
      closable:this.closable,
      enhanced: true
    });
  }

}
