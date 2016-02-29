import {inject, customElement} from 'aurelia-framework';
@customElement('footer')
@inject(Element)
export class Footer {

    constructor(element) {
        this.element = element;
    }
}