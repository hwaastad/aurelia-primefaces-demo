import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('p-breadcrumb')
@inject(Element)
export class BreadCrumbComponent {
  @bindable style=undefined;
  @bindable styleClass=undefined;

  initialized;
  menuElement;

  constructor(element){
    this.element=element;
  }

  attached(){
    this.menuElement=$(this.element).find('> div > ul');
    this.menuElement.puibreadcrumb({
      enhanced: true
    });
    this.initialized = true;
  }

  propertyChanged(property,newValue,oldValue){
    console.log('propertychange.....')
    if(this.initialized){
      this.menuElement.puibreadcrumb('option',property,newValue);
    }
  }

  detached(){
    if(this.initialized){
      this.menuElement.puibreadcrumb('destroy');
      this.initialized = false;
      this.menuElement = null;
    }
  }
}
