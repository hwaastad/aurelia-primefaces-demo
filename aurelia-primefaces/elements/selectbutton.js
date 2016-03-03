import {inject, customElement,bindable} from 'aurelia-framework';
import {SelectItem} from '../api/selectitem';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-selectbutton')
@inject(Element)
export class SelectButtonComponent {
  @bindable options: SelectItem[];
  @bindable tabindex: number;
  @bindable multiple: boolean;
  @bindable value: any;

  @bindable onChange;

  initialized: boolean;
  stopNgOnChangesPropagation: boolean;

  constructor(element) {
    this.element=element;
    this.initialized=false;
  }

  attached(){
    $(this.element.children[0]).puiselectbutton({
      value: this.value,
      tabindex : this.tabindex,
      multiple: this.multiple,
      enhanced: true,
      change: (event: Event, ui: PrimeUI.SelectbuttonEventParams) => {
        console.dir(ui);
        this.stopNgOnChangesPropagation = true;
        if(this.onChange){
          this.onChange({ originalEvent: event, value: ui.value });
        }
        if (this.multiple) {
          var values: any = [];
          for (var i = 0; i < ui.index.length; i++) {
            values.push(this.options[ui.index[i]].value);
            //this.valueChange.next(values);
          }
          this.value=values;
        } else {
          console.log('index: ' + ui.index);
          console.dir(this.options);
          this.value=this.options[ui.index].value;
          //this.valueChange.next(this.choices[ui.index].value);
        }
      }
    });
    this.initialized=true;
  }

  valueChanged(newValue,oldValue){
    console.log('Value change...');
    if (this.initialized) {
      if(this.stopNgOnChangesPropagation){
        console.log('already hadnled from jquery..');
        this.stopNgOnChangesPropagation=false;
        return;
      }
      console.log('Updating value with: ' + newValue);
      $(this.element.children[0]).puiselectbutton('option', 'value', newValue ? newValue : '');
    }
  }

  detatched(){
    $(this.element.children[0]).puiselectbutton('destroy');
    this.initialized=false;
  }
}
