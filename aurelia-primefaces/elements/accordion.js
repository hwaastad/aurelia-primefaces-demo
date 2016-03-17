import {inject, customElement,bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-accordion')
@inject(Element)
export class AccordionComponent {
  @bindable style;
  @bindable styleClass;
  @bindable multiple: boolean;
  @bindable onClose;
  @bindable onOpen;

  initialized: boolean;

  tabs: AccordionTabComponent[]=[];

  stopNgOnChangesPropagation: boolean;

  constructor(element){
    this.element=element;
  }

  addTab(tab: AccordionTabComponent) {
    console.log('Adding accordionTab:');
    this.tabs.push(tab);
  }

  attached(){
  }

}
