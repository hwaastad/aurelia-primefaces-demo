import {inject, customAttribute, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customAttribute('p-password')
@inject(Element)
export class PasswordAttribute {
    @bindable promptLabel = undefined;
    @bindable weakLabel = undefined;
    @bindable goodLabel = undefined;
    @bindable strongLabel = undefined;
    @bindable inline = undefined;
    @bindable disabled = undefined;

    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element).puipassword({
            promptLabel: this.promptLabel,
            weakLabel: this.weakLabel,
            goodLabel: this.goodLabel,
            strongLabel: this.strongLabel,
            inline: this.inline
        })
    }

    detached() {
        $(this.element).puipassword('destroy');
    }
}
