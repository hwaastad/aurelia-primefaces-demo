import {inject, noView, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-fieldset')
@inject(Element)
export class FieldSetConmponent {
    @bindable legend = undefined;
    @bindable toggleable = undefined;
    @bindable toggleDuration = undefined;
    @bindable collapsed = undefined;
    @bindable onBeforeToggle;
    @bindable onAfterToggle;

    initialized;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        $(this.element.children[0]).puifieldset({
            toggleable: this.toggleable,
            toggleDuration: this.toggleDuration,
            collapsed: this.collapsed,
            beforeToggle: this.onBeforeToggle ? (event: Event, collapsed: boolean) => {
                this.onBeforeToggle.next({ 'originalEvent': event, 'collapsed': collapsed });
            } : null,
            afterToggle: this.onAfterToggle ? (event: Event, collapsed: boolean) => {
                this.onAfterToggle.next({ 'originalEvent': event, 'collapsed': collapsed });
            } : null,
            enhanced: true
        });
        this.initialized = true;
    }

    propertyChanged(property, newValue, oldValue) {
        if (this.initialized) {
            $(this.element).puifieldset('option', property, newValue);
        }
    }

    detached() {
        $(this.element.children[0]).puifieldset('destroy');
        this.initialized = false;
    }

}