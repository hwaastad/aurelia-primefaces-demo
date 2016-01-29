import {inject, customElement,bindable} from 'aurelia-framework';
import {AccordionComponent} from './accordion';

@customElement('p-accordiontab')
@inject(AccordionComponent)
export class AccordionTabComponent {
  @bindable header: string;
  initialized: boolean;

  constructor(accordion: AccordionComponent){
    accordion.addTab(this);
  }
}
