import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('p-megamenu')
@inject(Element)
export class MegaMenuComponent {
    @bindable autoDisplay = undefined;
    @bindable orientation = undefined;
    @bindable style = undefined;
    @bindable styleClass = undefined;

    initialized;
    menuElement;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        this.menuElement = $(this.element).children('div');
        this.menuElement.puimegamenu({
            enhanced: true,
            autoDisplay: this.autoDisplay,
            orientation: this.orientation
        });
        this.initialized = true;
    }

    propertyChanged(property, newValue, oldValue) {
        console.log('propertychange.....')
        if (this.initialized) {
            this.menuElement.puimegamenu('option', property, newValue);
        }
    }

    detached() {
        if (this.initialized) {
            this.menuElement.puimegamenu('destroy');
            this.initialized = false;
            this.menuElement = null;
        }
    }

}