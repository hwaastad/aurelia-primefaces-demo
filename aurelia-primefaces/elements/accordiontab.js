import {inject, customElement,bindable} from 'aurelia-framework';
import {AccordionComponent} from './accordion';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-accordiontab')
@inject(AccordionComponent)
export class AccordionTabComponent {
  @bindable header: string;
  initialized: boolean;

  constructor(accordion: AccordionComponent){
    accordion.addTab(this);
  }
}
