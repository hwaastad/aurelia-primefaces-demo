import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-togglebutton')
@inject(Element)
export class ToggleButtonComponent {
    @bindable onLabel = 'Yes';
    @bindable offLabel = 'No';
    @bindable onIcon = undefined;
    @bindable offIcon = undefined;
    @bindable checked = undefined;
    @bindable disabled = undefined;
    @bindable style = undefined;
    @bindable styleClass = undefined;

    constructor(element) {
        this.element = element;
    }

    toggle(event) {
        if (!this.disabled) {
            this.checked=!this.checked;
           /* this.checkedChange(!this.checked);
            this.onChange({
                originalEvent: event,
                checked: !this.checked
            })*/
        }
    }

    getIconClass() {
        let baseClass = 'ui-button-icon-left fa fa-fw';
        return baseClass + ' ' + (this.checked ? this.onIcon : this.offIcon);
    }

    detached() {
    }
}