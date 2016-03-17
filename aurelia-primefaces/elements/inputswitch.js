import {inject, customElement, bindable} from 'aurelia-framework';
import {SelectItem} from '../api/selectitem';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-inputswitch')
@inject(Element)
export class InputSwitchComponent {
    @bindable onLabel = 'On';
    @bindable offLabel = 'Off';
    @bindable checked;


    initialized: boolean;
    inputSwitchElement: any;

    constructor(element) {
        this.element = element;
    }

    attached() {
        setTimeout(() => {
            this.inputSwitchElement = $(this.element.children[0]).find('> .ui-helper-hidden-accessible > input');
            this.inputSwitchElement.puiswitch({
                checked: this.checked,
                enhanced: true,
                change: (event: Event, ui: PrimeUI.InputSwitchEventParams) => {
                    this.stopNgOnChangesPropagation = true;
                    this.checked = !this.checked;
                    /* this.checkedChange.next(ui.checked);
                     if (this.onChange) {
                         this.onChange.next({ originalEvent: event, checked: ui.checked });
                     }*/
                }
            });
            this.initialized = true
        }, 10);

    }

    detached() {
        this.inputSwitchElement.puiswitch('destroy');
        this.initialized = false;
        this.inputSwitchElement = null;
    }
}