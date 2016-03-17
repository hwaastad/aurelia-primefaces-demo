import {inject, customElement, bindable} from 'aurelia-framework';
import {AccordionComponent} from './accordion';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-accordiontab')
@inject(Element, AccordionComponent)
export class AccordionTabComponent {
    @bindable header: string;
    @bindable selected;
    @bindable disabled;

    constructor(element: Element, accordion: AccordionComponent) {
        this.element = element;
        this.accordion=accordion;
        accordion.addTab(this);
    }

    toggle(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }

        let index = this.findTabIndex();

        if (this.selected) {
            this.selected = !this.selected;
            if (this.onClose) {
                this.accordion.onClose({ originalEvent: event, index: index });
            }
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                }
            }

            this.selected = true;
            if (this.onOpen) {
                this.accordion.onOpen({ originalEvent: event, index: index });
            }
        }

        event.preventDefault();
    }

    findTabIndex() {
        let index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    }
}
