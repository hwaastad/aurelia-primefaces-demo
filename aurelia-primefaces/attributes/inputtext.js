import {inject, customAttribute, bindable} from 'aurelia-framework';

@customAttribute('p-inputtext')
@inject(Element)
export class InputTextAttribute {
    @bindable disabled = false;

    constructor(element) {
        this.element = element;
    }

    bind() {
        $(this.element).puiinputtext({
            disabled: this.disabled
        });
        this.initialized = true;
    }

    detached() {
        $(this.element).puiinputtext('destroy');
    }

    disabledChanged(newValue, oldValue) {
        if (this.initialized = true) {
            $(this.element).puiinputtext('option', 'disabled', newValue);
        }
    }
}
