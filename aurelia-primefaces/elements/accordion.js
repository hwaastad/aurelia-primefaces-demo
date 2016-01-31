import {inject, customElement,bindable} from 'aurelia-framework';

@customElement('p-accordion')
@inject(Element)
export class AccordionComponent {
  @bindable activeIndex: number = 0;
  @bindable multiple: boolean;
  @bindable onChange;
  @bindable activeIndexChange;

  initialized: boolean;

  tabPanels: AccordionTabComponent[];

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
        if(this.onChange){
          this.onChange({originalEvent: event, ui: ui});
        }
      }
    });
    this.initialized = true;
  }

  activeIndexChanged(newValue,oldValue){
    console.log('indexChange......new value: ' + newValue);
    $(this.element.children[0]).puiaccordion('option', 'activeIndex', newValue);
  }

  detached(){
    console.log('accordion detached');
    //$(this.element).puiaccordion('destroy');
    this.initialized = false;
  }
}