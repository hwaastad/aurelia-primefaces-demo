import {inject, customElement,bindable} from 'aurelia-framework';
import {SelectItem} from '../api/selectitem';

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
        this.value=this.options[ui.index].value;
        this.stopNgOnChangesPropagation = true;
        if(this.onChange){
          this.onChange({ originalEvent: event, value: ui.value });
        }
        if (this.multiple) {
          var values: any = [];
          for (var i = 0; i < ui.index.length; i++) {
            values.push(this.choices[ui.index[i]].value);
            //this.valueChange.next(values);
          }
          this.value=values;
        }
        else {
          //this.valueChange.next(this.choices[ui.index].value);
        }
      }
    });
    this.initialized=true;
  }

  detatched(){
    $(this.element.children[0]).puiselectbutton('destroy');
    this.initialized=false;
  }
}
