import {inject, customElement,bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-tabview')
@inject(Element)
export class TabViewComponent {
  @bindable activeIndex: number=0;
  @bindable orientation: string;
  @bindable effect: string;
  @bindable effectDuration: any='fast';
  @bindable onChange;
  @bindable onClose;
  @bindable activeIndexChange;

  tabPanels: TabPanelComponent[];

  initialized: boolean;

  stopNgOnChangesPropagation: boolean;

  constructor(element){
    this.element=element;
    this.tabPanels = [];
    this.initialized = false;
  }

  attached(){
    $(this.element.children[0]).puitabview({
      activeIndex: this.activeIndex,
      orientation: this.orientation,
      effect: this.effect ? {name: this.effect, duration: this.effectDuration} : null,
      change:(event: Event, ui: any) => {
        this.stopNgOnChangesPropagation = true;
        if(this.activeIndexChange){
          this.activeIndexChange({originalEvent: event, ui: ui});
        }
        if (this.onChange) {
          this.onChange({originalEvent: event, index: ui.index});
        }
      },
      close: this.onClose ? (event: Event, ui: any) => {
        this.onClose({originalEvent: event, index: ui.index});
      }: null
    });
    this.initialized = true;
  }

  activeIndexChanged(newValue,oldValue){
    if (this.stopNgOnChangesPropagation) {
      this.stopNgOnChangesPropagation = false;
      return;
    } else {
      if(this.initialized){
        $(this.element.children[0]).puitabview('option', 'activeIndex', newValue);
      }
    }
  }

  detached(){
    $(this.element.children[0]).puitabview('destroy');
    this.initialized = false;
  }

  addTab(tab: TabPanelComponent) {
    console.log('adding tab....');
    console.dir(tab);
    this.tabPanels.push(tab);
  }
}
