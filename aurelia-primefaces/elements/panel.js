import {inject, customElement, bindable} from 'aurelia-framework';
/*import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';*/

@customElement('p-panel')
@inject(Element)
export class PanelComponent {
    @bindable header: String;
    @bindable toggleable: Boolean;
    @bindable collapsed = false;
    @bindable style;
    @bindable styleClass;
    @bindable onBeforeToggle;
    @bindable onAfterToggle;


    hoverToggler;

    constructor(element) {
        this.element = element;
    }

    attached() {

    }

    detached() {

    }

    toggle(event) {
        if (this.onBeforeToggle) {
            this.onBeforeToggle({ originalEvent: event, collapsed: this.collapsed });
        }
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        if (this.onAfterToggle) {
            this.onAfterToggle({ originalEvent: event, collapsed: this.collapsed });
        }
        event.preventDefault();
    }

    expand(event) {
        this.collapsed = false;
    }

    collapse(event) {
        this.collapsed = true;
    }

}
