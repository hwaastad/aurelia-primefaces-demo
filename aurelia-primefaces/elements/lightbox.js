import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('p-lightbox')
@inject(Element)
export class LighBoxComponent {


    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        $(this.element.children[0]).puilightbox();
        this.initialized = true;
    }

    propertyChanged(property, newValue, oldValue) {
        console.log('propertychange.....')
        if (this.initialized) {
            $(this.element.children[0]).puilightbox('option', property, newValue);
        }
    }

    detached() {
        if (this.initialized) {
            $(this.element.children[0]).puilightbox('destroy');
            this.initialized = false;
            this.menuElement = null;
        }
    }


}