import {customElement, inject, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-panelmenu')
@inject(Element)
export class PanelMenuComponent {
    @bindable style: string;
    @bindable styleClass: string;
    initialized: boolean;
    menuElement: any;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        this.menuElement = $(this.element).children('div');
        this.menuElement.puipanelmenu({
            enhanced: true
        });
        this.initialized = true;
    }

    propertyChanged(property, newVal, oldVal) {
        if (this.initialized) {
            this.menuElement.puipanelmenu('option', property, newVal);
        }
    }

    detached() {
        this.menuElement.puipanelmenu('destroy');
        this.initialized = false;
        this.menuElement = null;
    }
}