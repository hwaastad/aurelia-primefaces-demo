import {inject,customAttribute} from 'aurelia-framework';

@customAttribute('p-active')
@inject(Element)
export class PrimeBlur {
  constructor(element) {
    this.element = element;
    this.onMouseDown = e => {
      this.element.classList.add("ui-state-active");
    }
    this.onMouseUp = e => {
      this.element.classList.remove(["ui-state-active"]);
    }
  }

  attached(){
    this.element.addEventListener('mousedown', this.onMouseDown);
    this.element.addEventListener('mouseup', this.onMouseUp);
  }


  detached() {
    this.element.removeEventListener(this.onMouseDown);
    this.element.removeEventListener(this.onMouseUp);

  }
}
