import {inject, customElement,bindable} from 'aurelia-framework';
import {SelectItem} from '../api/selectitem';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-listbox')
@inject(Element)
export class ListBoxComponent {
  @bindable options: SelectItem[];
  @bindable value: any;
  @bindable multiple: boolean;
  @bindable scrollHeight: number;
  @bindable customContent: boolean;
  @bindable style: string;
  @bindable styleClass: string;

  @bindable valueChange;
  @bindable onChange;

  initialized: boolean;

  constructor(element) {
    this.element=element;
    this.initialized = false;
  }

  attached(){
    $(this.element.children[0].children[0].children[0]).puilistbox({
      value: this.value,
      scrollHeight: this.scrollHeight,
      multiple: this.multiple,
      enhanced: true,
      style: this.style,
      styleClass: this.styleClass,
      change: (event: Event, ui: PrimeUI.ListboxEventParams) => {
        if(this.onChange){
          this.onChange({originalEvent: event, value: ui.value});
        }
        if(this.multiple) {
          var values:any = [];
          for(var i = 0; i < ui.index.length;i++) {
            values.push(this.options[ui.index[i]].value);
          }

          this.valueChange({event: values});
        }
        else {
          if(this.valueChange){
            this.valueChange({event: this.options[ui.index].value});
          }
        }
      }
    });
    this.initialized = true;
  }

  valueChanged(newValue,oldValue) {
    if (this.initialized) {
      $(this.element.children[0].children[0].children[0]).puilistbox('option', 'value', newValue);
    }
  }
}
