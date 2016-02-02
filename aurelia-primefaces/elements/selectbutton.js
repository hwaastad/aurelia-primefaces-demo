import {inject, customElement,bindable} from 'aurelia-framework';
import {SelectItem} from '../api/selectitem';

@customElement('p-selectbutton')
@inject(Element)
export class SelectButtonComponent {
  @bindable choices: SelectItem[];
  @bindable formfield: string;
  @bindable unselectable: boolean;
  @bindable tabindex: number;
  @bindable multiple: boolean;
  @bindable style: string;
  @bindable styleClass: string;
  @bindable value: any;
  @bindable onChange;

  initialized: boolean;

  constructor(element) {
    this.element=element;
    this.initialized=false;
  }

  attached(){
    $(this.element.children[0]).puiselectbutton({
      value: this.value,
      unselectable: this.unselectable,
      tabindex : this.tabindex,
      formfield: this.formfield,
      multiple: this.multiple,
      enhanced: true,
      style: this.style,
      styleClass: this.styleClass,
      change: (event: Event, ui: PrimeUI.SelectbuttonEventParams) => {
        ig(this.onChange){
          this.onChange({ originalEvent: event, value: ui.value });
        }
        /*  if (this.multiple) {
        var values: any = [];
        for (var i = 0; i < ui.index.length; i++) {
        values.push(this.choices[ui.index[i]].value);
        this.valueChange.next(values);
      }

    }
    else {
    this.valueChange.next(this.choices[ui.index].value);
  }*/
}
});
this.initialized=true;
}

detatched(){
  $(this.element.children[0]).puiselectbutton('destroy');
  this.initialized=false;
}
}
