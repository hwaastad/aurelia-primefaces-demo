import {inject, customElement,bindable} from 'aurelia-framework';

@customElement('p-tabview')
@inject(Element)
export class TabViewComponent {
  @bindable activeIndex: number=0;
  @bindable orientation: string;
  @bindable effect: string;
  @bindable effectDuration: any='fast';
  @bindable onchange;
  @bindable onclose;
  @bindable activeIndexChange;

  tabPanels: TabPanelComponent[];

  initialized: boolean;

  constructor(element){
    //console.log('constructing tabview....');
    this.element=element;
    this.tabPanels = [];
    this.initialized = false;
  }

  attached(){
    //console.log('attaching tabview....');
    $(this.element.children[0]).puitabview({
      activeIndex: this.activeIndex,
      orientation: this.orientation,
      effect: this.effect ? {name: this.effect, duration: this.effectDuration} : null,
      change:(event: Event, ui: any) => {
      //  this.activeIndexChange(ui.index);
        if (this.onchange) {
          this.onchange({originalEvent: event, index: ui.index});
        }
      },
      close: this.onclose ? (event: Event, ui: any) => {
        this.onclose({originalEvent: event, index: ui.index})
      }: null
    });
    this.initialized = true;
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
