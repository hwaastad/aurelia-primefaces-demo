import {inject, noView, customElement, bindable} from 'aurelia-framework';
/*import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';*/

@customElement('p-fieldset')
@inject(Element)
export class FieldSetConmponent {
    @bindable legend = undefined;
    @bindable toggleable = undefined;
    @bindable collapsed = undefined;
    @bindable onBeforeToggle;
    @bindable onAfterToggle;

    hover;

    constructor(element) {
        this.element = element;
    }

    onLegendMouseenter(event) {
        if (this.toggleable) {
            this.hover = true;
        }
    }

    onLegendMouseleave(event) {
        if (this.toggleable) {
            this.hover = false;
        }
    }

    toggle(event) {
        if (this.toggleable) {
            if (this.onBeforeToggle) {
                this.onBeforeToggle({ originalEvent: event, collapsed: this.collapsed });
            }
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
            if (this.onAfterToggle) {
                this.onAfterToggle.next({ originalEvent: event, collapsed: this.collapsed });
            }
        }
    }

    expand(event) {
        this.collapsed = false;
    }

    collapse(event) {
        this.collapsed = true;
    }

}