import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-slidemenu')
@inject(Element)
export class SlideMenuComponent {
    @bindable popup = undefined;
    @bindable trigger = undefined;
    @bindable my = undefined;
    @bindable at = undefined;
    @bindable triggerEvent = undefined;
    @bindable backLabel="Back";
    @bindable style = undefined;
    @bindable styleClass = undefined;

    initialized;
    menuElement;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        this.menuElement = $(this.element).find('> div > div > div > ul');
        this.menuElement.puislidemenu({
            enhanced: true,
            popup: this.popup,
            trigger: this.trigger ? $(this.trigger) : null,
            my: this.my,
            at: this.at,
            triggerEvent: this.triggerEvent
        });
        this.initialized = true;
    }

    propertyChanged(property, newValue, oldValue) {
        console.log('change...');
        if (this.initialized) {
            this.menuElement.puislidemenu('option', property, newValue);
        }
    }

    detached() {
        if (this.initialized) {
            this.menuElement.puislidemenu('destroy');
            this.initialized = false;
            this.menuElement = null;
        }
    }
}