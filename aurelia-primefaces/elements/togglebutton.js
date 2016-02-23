import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-togglebutton')
@inject(Element)
export class ToggleButtonComponent {
    @bindable onLabel = undefined;
    @bindable offLabel = undefined;
    @bindable onIcon = undefined;
    @bindable offIcon = undefined;
    @bindable checked = undefined;
    @bindable disabled = undefined;
    @bindable style = undefined;
    @bindable styleClass = undefined;
    initialized: boolean = undefined;

    stopNgOnChangesPropagation: boolean;

    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element.children[0]).puitogglebutton({
            onLabel: this.onLabel,
            offLabel: this.offLabel,
            onIcon: this.onIcon,
            offIcon: this.offIcon,
            checked: this.checked,
            disabled: this.disabled,
            style: this.style,
            styleClass: this.styleClass,
            change: (event: Event, ui: PrimeUI.ToggleButtonEventParams) => {
                this.stopNgOnChangesPropagation = true;
                this.checked = !this.checked;
                /* this.checkedChange.next(ui.checked);
                 if (this.onChange) {
                     this.onChange.next({ originalEvent: event, checked: ui.checked });
                 }*/
            }
        });
    }

    detached() {
        if (this.initialized) {
            $(this.element.children[0]).puitogglebutton('destroy');
        }
    }
}