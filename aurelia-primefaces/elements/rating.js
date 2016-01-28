import {inject, customElement,bindable,noView} from 'aurelia-framework';
/*import 'jquery-ui';
import 'primeui';
import 'primeui/primeui-min.css!';*/

@customElement('p-rating')
@inject(Element)
@noView()
export class RatingComponent {
  @bindable value: number;
  @bindable disabled: boolean;
  @bindable readonly: boolean;
  @bindable stars: number;
  @bindable cancel: boolean=true;
  @bindable onrate;
  @bindable oncancel;

  initialized: boolean;
  stopNgOnChangesPropagation: boolean;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  attached(){
    //console.dir(this);
    //console.log('constructing with initial value: ' +this.value);
    if(!this.stars){
      this.stars=5;
    }
    $(this.element).puirating({
      value: this.value,
      stars: this.stars,
      cancel: this.cancel,
      disabled: this.disabled,
      readonly: this.readonly,
      rate: (event: Event, value: number) => {
        console.log('value: ' + this.value);
        if(this.onrate){
          this.onrate({originalEvent: event, value: value});
        } else {
          console.log('No onrate callback');
        }
      },
      oncancel: (event: Event) => {
        if(this.oncancel){
          this.oncancel({event});
        } else {
          console.log('No cancel callback');
        }
      }

    });
    this.initialized = true;
  }


  detached(){
    console.log("detached rating");
    $(this.element).puirating('destroy');
    this.initialized=false;
  }
}
