import {inject, customElement,bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-accordion')
@inject(Element)
export class AccordionComponent {
  @bindable activeIndex: number = 0;
  @bindable multiple: boolean;
  @bindable onChange;

  initialized: boolean;

  tabPanels: AccordionTabComponent[];

  stopNgOnChangesPropagation: boolean;

  constructor(element){
    this.element=element;
    this.tabPanels=[];
    this.initialized = false;
  }

  addTab(tab: AccordionTabComponent) {
    console.log('Adding accordionTab:');
    this.tabPanels.push(tab);
  }

  attached(){
    console.log('attaching p-accordion');
    $(this.element.children[0]).puiaccordion({
      activeIndex: this.activeIndex,
      multiple: this.multiple,
      change: (event: Event, ui: any) => {
        this.activeIndex = ui.index;
        this.stopNgOnChangesPropagation = true;
        if(this.onChange){
          this.onChange({originalEvent: event, ui: ui});
        }
      }
    });
    this.initialized = true;
  }

  activeIndexChanged(newValue,oldValue){
    console.log('indexChanged....')
    if (this.stopNgOnChangesPropagation) {
      this.stopNgOnChangesPropagation = false;
      return;
    } else {
      if(this.initialized){
        $(this.element.children[0]).puiaccordion('option', 'activeIndex', newValue);
      }
    }
  }

  unbind(){
    console.log('accordion detached');
    //  $(this.element).puiaccordion('destroy');
    this.initialized = false;
  }
}
