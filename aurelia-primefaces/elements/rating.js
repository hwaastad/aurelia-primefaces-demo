import {inject, customElement,bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-rating')
@inject(Element)
export class RatingComponent {
  @bindable value: number;
  @bindable disabled: boolean;
  @bindable readonly: boolean;
  @bindable stars: number = undefined;
  @bindable cancel: boolean=true;
  @bindable onRate;
  @bindable onCancel;

  initialized: boolean;
  stopNgOnChangesPropagation: boolean;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  attached(){
    $(this.element.children[0]).puirating({
      value: this.value,
      stars: this.stars,
      cancel: this.cancel,
      disabled: this.disabled,
      readonly: this.readonly,
      rate: (event: Event, value: number) => {
        console.log('value: ' + this.value);
        this.value=value;
        if(this.onRate){
          this.onRate({originalEvent: event, value: value});
        } else {
          console.log('No onrate callback');
        }
      },
      oncancel: (event: Event) => {
        this.value=null;
        if(this.onCancel){
          this.onCancel({event});
        } else {
          console.log('No cancel callback');
        }
      }

    });
    this.initialized = true;
  }


  detached(){
    console.log("detached rating");
    if(this.initialized){
      //$(this.element.children[0]).puirating('destroy');
    }
    this.initialized=false;
  }
}
