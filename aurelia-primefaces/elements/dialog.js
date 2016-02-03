import {inject, customElement,bindable} from 'aurelia-framework';

@customElement('p-dialog')
@inject(Element)
export class DialogComponent {

  @bindable header: string = undefined;
  @bindable draggable: boolean = true;
  @bindable resizable: boolean = true;
  @bindable minWidth: number = undefined;
  @bindable minHeight: number = undefined;
  @bindable width: any = undefined;
  @bindable height: any = undefined;
  @bindable visible: boolean;
  @bindable modal: boolean;
  @bindable showEffect: string = undefined;
  @bindable hideEffect: string = undefined;
  @bindable effectDuration: any = undefined;
  @bindable closeOnEscape: boolean = true;
  @bindable rtl: boolean;
  @bindable closable: boolean = true;
  @bindable minimizable: boolean
  @bindable maximizable: boolean;
  @bindable responsive: boolean;
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
      afterHide: (event: Event) => {
        this.visible=false;
        if(this.onAfterHide){
          this.onAfterHide({event: event});
        }
      },
      minimize: this.onMinimize ? (event: Event) => { this.onMinimize({event: event}); } : null,
      maximize: this.onMaximize ? (event: Event) => { this.onMaximize({event: event}); } : null,
      enhanced: true
    });
    this.initialized = true;
  }

  visibleChanged(newValue,oldValue){
    if (this.initialized) {
      if(this.stopNgOnChangesPropagation){
        return;
      }
      $(this.element.children[0]).puidialog('option','visible',newValue);
    }
  }

  detached() {
    $(this.element.children[0]).puidialog('destroy');
    this.initialized = false;
  }
}
