import {noView, inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-progressbar')
@inject(Element)
export class ProgressBarConmponent {
    @bindable value;
    @bindable labelTemplate = undefined;
    @bindable showLabel = undefined;
    @bindable easing = undefined;
    @bindable effectSpeed = undefined;

    initialized = false;

    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element.children[0]).puiprogressbar({
            value: this.value,
            labelTemplate: this.labelTemplate,
            showLabel: this.showLabel,
            easing: this.easing,
            effectSpeed: this.effectSpeed,
            complete: function (event) {
            }
        });
        this.initialized = true;
    }

    valueChanged(newValue, oldValue) {
        if (this.initialized) {
            $(this.element.children[0]).puiprogressbar('option', 'value', newValue);
        }
    }
}