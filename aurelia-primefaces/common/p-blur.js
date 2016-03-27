import {inject,customAttribute} from 'aurelia-framework';

@customAttribute('p-blur')
@inject(Element)
export class PrimeFocus {
  constructor(element) {
    this.element = element;
    this.onBlur = e => {
      this.element.classList.remove(["ui-state-focus"]);
    }
  }

  attached(){
    this.element.addEventListener('blur', this.onBlur);
  }


  detached() {
    this.element.removeEventListener(this.onBlur);

  }
}
