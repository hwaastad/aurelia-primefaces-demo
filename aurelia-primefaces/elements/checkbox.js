import {inject, customElement,bindable} from 'aurelia-framework';
//import 'jquery-ui/themes/smoothness/jquery-ui.min.css!';
//import 'primeui';
//import 'primeui/primeui-min.css!';
//import 'primeui/themes/bootstrap/theme.css!';

@customElement('p-checkbox')
@inject(Element)
export class CheckboxComponent {
  @bindable value: any;
  @bindable name: String;
  @bindable disabled: Boolean;
  @bindable model: any;
  @bindable checked;
  @bindable hover;

  hover: boolean;

  attached(element) {
  //  console.log('contructing......'+this.value);
    var index = this.findValueIndex(this.value);
    if(index >= 0) {
      this.checked=true;
    }
    this.element = element;
  }

  bind(){

  }
  onClick() {
    this.checked = !this.checked;

    if (this.checked)
    this.addValue(this.value);
    else
    this.removeValue(this.value);
  }

  findValueIndex(value) {
    var index: number = -1;
    if(this.model) {
      for (var i = 0; i < this.model.length; i++) {
        if(this.model[i] == value) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  removeValue(value) {
    var index = this.findValueIndex(value);
    if(index >= 0) {
      this.model.splice(index, 1);
    }
  }

  addValue(value) {
    this.model.push(value);
  }

}
