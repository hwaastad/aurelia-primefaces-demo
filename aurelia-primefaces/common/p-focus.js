import {inject,customAttribute} from 'aurelia-framework';

@customAttribute('p-focus')
@inject(Element)
export class PrimeActive {
  constructor(element) {
    this.element = element;
    this.onFocus = e => {
      this.element.classList.add("ui-state-focus");
    }
  }

  attached(){
    this.element.addEventListener('focus', this.onFocus);
  }


  detached() {
    this.element.removeEventListener(this.onFocus);

  }
}
