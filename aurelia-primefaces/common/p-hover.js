import {inject,customAttribute} from 'aurelia-framework';

@customAttribute('p-hover')
@inject(Element)
export class PrimeHover {

  constructor(element) {
    this.element = element;
    this.onMouseOver = e => {
      this.element.classList.add("ui-state-hover");
    }
    this.onMouseOut = e => {
      this.element.classList.remove(["ui-state-hover"]);
    }
  }

  attached(){
    this.element.addEventListener('mouseover', this.onMouseOver);
    this.element.addEventListener('mouseout', this.onMouseOut);
  }


  detached() {
    this.element.removeEventListener(this.onMouseOver);
    this.element.removeEventListener(this.onMouseOut);

  }
}
