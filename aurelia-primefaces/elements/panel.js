import {inject, customElement,bindable} from 'aurelia-framework';

@customElement('p-panel')
@inject(Element)
export class PanelComponent {
  @bindable header: String;
  @bindable toggleable: Boolean;
  @bindable toggleDuration: any;
  @bindable toggleOrientation: any;
  @bindable closable: Boolean;
  @bindable closeDuration: any;
  @bindable collapsed: boolean;
  @bindable onBeforeCollapse;
  @bindable onAfterCollapse;
  @bindable onBeforeExpand;
  @bindable onAfterExpand;
  @bindable onBeforeClose;
  @bindable onAfterClose;
  initialized: boolean;

  constructor(element){
    this.element=element;
    this.initialized = false;
  }

  attached(){
    console.log('closable: ' + this.closable + ' toggleable: ' + this.toggleable);
    $(this.element).puipanel({
      title: this.header,
      toggleable: this.toggleable,
      toggleDuration: this.toggleDuration,
      toggleOrientation: this.toggleOrientation,
      collapsed: this.collapsed,
      closable:this.closable,
      closeDuration: this.closeDuration,
      /*beforeCollapse: this.onBeforeCollapse ? (event: Event) => { this.onBeforeCollapse(event); } : null,
      afterCollapse: this.onAfterCollapse ? (event: Event) => { this.onAfterCollapse(event); } : null,
      beforeExpand: this.onBeforeExpand ? (event: Event) => { this.onBeforeExpand(event); } : null,
      afterExpand: this.onAfterExpand ? (event: Event) => { this.onAfterExpand(event); } : null,
      beforeClose: this.onBeforeClose ? (event: Event) => { this.onBeforeClose(event); } : null,
      afterClose: this.onAfterClose ? (event: Event) => { this.onAfterClose(event); } : null,*/
      enhanced: true
    });
    this.initialized = true;
  }

  detached(){
    $(this.element).puipanel('destroy');
    this.initialized = false;
  }

}
