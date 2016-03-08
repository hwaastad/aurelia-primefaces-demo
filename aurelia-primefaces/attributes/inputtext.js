import {inject, customAttribute, bindable} from 'aurelia-framework';
import {AttributeManager} from '../common/attributeManager';
/*import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';*/

@customAttribute('p-inputtext')
@inject(Element)
export class InputTextAttribute {
    @bindable disabled = false;
    hover = false;
    focus = false;

    constructor(element) {
        this.element = element;
        this.attributeManager = new AttributeManager(element);
        this.onFocus = e => {
            this.attributeManager.addClasses("ui-state-focus");
            this.focus = true;
        }
        this.onMouseOver = e => {
            this.attributeManager.addClasses("ui-state-hover");
            this.focus = true;
        }
        this.onMouseOut = e => {
            this.attributeManager.removeClasses(["ui-state-hover", "ui-state-focus"]);
            this.focus = true;
        }
        this.onBlur = e => {
            this.attributeManager.removeClasses(["ui-state-focus"]);
            this.focus = true;
        }
    }

    attached() {
        this.attributeManager.addClasses(["ui-inputtext", "ui-corner-all", "ui-state-default", "ui-widget"]);
        if (this.disabled) {
            this.attributeManager.addClasses("ui-state-disabled");
        }
        this.element.addEventListener('focus', this.onFocus);
        this.element.addEventListener('mouseover', this.onMouseOver);
        this.element.addEventListener('mouseout', this.onMouseOut);
        this.element.addEventListener('blur', this.onBlur);

    }

    detached() {
        this.element.removeEventListener('focus', this.onFocus);
        this.element.removeEventListener('mouseover', this.onMouseOver);
        this.element.removeEventListener('mouseout', this.onMouseOut);
        this.element.removeEventListener('blur', this.onBlur);
    }

    disabledChanged(newValue, oldValue) {
        this.element.disabled = newValue;
        if (newValue === true) {
            this.attributeManager.addClasses("ui-state-disabled");
        } else {
            this.attributeManager.removeClasses("ui-state-disabled");
        }
    }
}
