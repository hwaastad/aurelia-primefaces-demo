import {noView,inject, customElement,bindable} from 'aurelia-framework';


@customElement('p-growl')
@inject(Element)
@noView()
export class GrowlComponent {
  @bindable sticky;
  @bindable life;

  constructor(element){
    this.element=element;
  }

  attached(){
    console.log('attching growl...');
    $(this.element).puigrowl({
      sticky: this.sticky,
      life: this.life
    });
  }

  detached(){
    $(this.element).puigrowl('destroy');
  }
}
