import {inject, customAttribute, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

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
