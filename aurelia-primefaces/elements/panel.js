import {inject, customElement,bindable} from 'aurelia-framework';


@customElement('p-panel')
@inject(Element)
export class PanelComponent {
  @bindable header: String;
  @bindable toggleable: Boolean;
  @bindable toggleduration: any;
  @bindable toggleorientation: any = undefined;
  @bindable closable: Boolean;
  @bindable closeduration: any;
  @bindable collapsed: boolean;
  @bindable onbeforecollapse;
  @bindable onaftercollapse;
  @bindable onbeforeexpand;
  @bindable onafterexpand;
  @bindable onbeforeclose;
  @bindable onafterclose;
  initialized: boolean;

  constructor(element){
    console.log('panel contruct');
    this.element=element;
    this.initialized = false;
  }

  attached(){
    console.log('panel attached');
    console.log('closable: ' + this.closable + ' toggleable: ' + this.toggleable);
    $(this.element.children[0]).puipanel({
      title: this.header,
      toggleable: this.toggleable,
      toggleDuration: this.toggleduration,
      toggleOrientation: this.toggleorientation,
      collapsed: this.collapsed,
      closable:this.closable,
      closeDuration: this.closeduration,
      beforeCollapse: this.onbeforecollapse ? (event: Event) => { this.onbeforecollapse(event); } : null,
      afterCollapse: this.onaftercollapse ? (event: Event) => { this.onaftercollapse(event); } : null,
      beforeExpand: this.onbeforeexpand ? (event: Event) => { this.onbeforeexpand(event); } : null,
      afterExpand: this.onafterexpand ? (event: Event) => { this.onafterexpand(event); } : null,
      beforeClose: this.onbeforeclose ? (event: Event) => { this.onbeforeclose(event); } : null,
      afterClose: this.onafterclose ? (event: Event) => { this.onafterclose(event); } : null,
      enhanced: true
    });
    this.initialized = true;
  }

  detached(){
    console.log('panel detached');
    $(this.element.children[0]).puipanel('destroy');
    this.initialized = false;
  }

  //Logging
  bind() {
    console.log('panel bind');
  }

  activated() {
    console.log('panel activated');
  }
  created() {
    console.log('panel created');
  }

  activate() {
    console.log('panel activate');
  }

  canActivate() {
    console.log('panel canActivate');
  }

}
