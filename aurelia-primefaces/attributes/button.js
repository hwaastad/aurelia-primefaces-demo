import {inject, customAttribute, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customAttribute('p-button')
@inject(Element)
export class ButtonDirective {
    @bindable icon;
    @bindable iconPos = undefined;
    @bindable disabled;

    initialized: Boolean;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        $(this.element).puibutton({
            icon: this.icon,
            iconPos: this.iconPos,
        });
        this.initialized = true;
    }

    detached() {
        $(this.element).puibutton('destroy');
        this.initialized = false;
    }
}
