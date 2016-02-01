import {inject, customElement,bindable} from 'aurelia-framework';

@customElement('p-dialog')
@inject(Element)
export class DialogComponent {

  @bindable  header: string;
  @bindable  draggable: boolean = true;
  @bindable  resizable: boolean = true;
  @bindable  minWidth: number;
  @bindable  minHeight: number;
  @bindable  width: any;
  @bindable  height: any;
  @bindable  visible: boolean;
  @bindable  modal: boolean;
  @bindable  showEffect: string;
  @bindable  hideEffect: string;
  @bindable  effectDuration: any;
  @bindable  closeOnEscape: boolean = true;
  @bindable  rtl: boolean;
  @bindable  closable: boolean = true;
  @bindable  minimizable: boolean;
  @bindable  maximizable: boolean;
  @bindable  responsive: boolean;
  @bindable onBeforeShow;
  @bindable onAfterShow;
  @bindable onBeforeHide;
  @bindable onAfterHide;
  @bindable visibleChange;
  @bindable onMinimize;
  @bindable onMaximize;

  initialized: boolean;

  stopNgOnChangesPropagation: boolean;


  constructor(element) {
    console.log('asdasdasd');
    this.element=element;
    this.initialized=false;
  }

  attached(){
    $(this.element.children[0]).puidialog({
      title: this.header,
      draggable: this.draggable,
      resizable: this.resizable,
      minWidth: this.minWidth,
      minHeight: this.minHeight,
      width: this.width,
      height: this.height,
      visible: this.visible,
      modal: this.modal,
      showEffect: this.showEffect,
      hideEffect: this.hideEffect,
      effectSpeed: this.effectDuration,
      closeOnEscape: this.closeOnEscape,
      rtl: this.rtl,
      closable: this.closable,
      minimizable: this.minimizable,
      maximizable: this.maximizable,
      responsive: this.responsive,
      beforeShow: this.onBeforeShow ? (event: Event) => { this.onBeforeShow({event: event}); } : null,
      afterShow: this.onAfterShow ? (event: Event) => { this.onAfterShow({event: event}); } : null,
      beforeHide: this.onBeforeHide ? (event: Event) => { this.onBeforeHide({event: event}); } : null,
      afterHide: this.onAfterHide ? (event: Event) => {
        this.stopNgOnChangesPropagation = true;
        this.visibleChange({false});
        this.onAfterHide({event: event});
      } : null,
      minimize: this.onMinimize ? (event: Event) => { this.onMinimize({event: event}); } : null,
      maximize: this.onMaximize ? (event: Event) => { this.onMaximize({event: event}); } : null,
      enhanced: true
    });
    this.initialized = true;
  }

  detached() {
    $(this.element.children[0]).puidialog('destroy');
    this.initialized = false;
  }
}
