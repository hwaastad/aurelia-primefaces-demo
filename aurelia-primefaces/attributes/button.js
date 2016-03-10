import {inject, customAttribute, bindable} from 'aurelia-framework';
import {AttributeManager} from '../common/attributeManager';
/*import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';*/

@customAttribute('p-button')
@inject(Element)
export class ButtonDirective {
    @bindable icon = undefined;
    @bindable iconPos = 'left';
    @bindable label = undefined;

    constructor(element) {
        this.attributeManager = new AttributeManager(element);
        this.element = element;
        this.onFocus = e => {
            this.attributeManager.addClasses("ui-state-focus");
        }
        this.onMouseOver = e => {
            this.attributeManager.addClasses("ui-state-hover");
        }
        this.onMouseOut = e => {
            this.attributeManager.removeClasses(["ui-state-hover"]);
        }
        this.onMouseDown = e => {
            this.attributeManager.addClasses(["ui-state-active"]);
        }
        this.onMouseUp = e => {
            this.attributeManager.removeClasses(["ui-state-active"]);
        }
        this.onBlur = e => {
            this.attributeManager.removeClasses(["ui-state-focus"]);
        }
    }

    attached() {
        if(this.element.getAttribute('icon')){
            this.icon=this.element.getAttribute('icon');
        }
        this.attributeManager.addClasses(["ui-button", "ui-widget", "ui-state-default", "ui-corner-all"]);
        if (!this.icon && this.label) {
            this.attributeManager.addClasses(["ui-button-text-only"]);
        }
        if (this.icon && !this.label) {
            this.attributeManager.addClasses(["ui-button-icon-only"]);
        }
        if (this.icon && this.label && this.iconPos == "left") {
            this.attributeManager.addClasses(["ui-button-text-icon-left"]);
        }
        if (this.icon && this.label && this.iconPos == "right") {
            this.attributeManager.addClasses(["ui-button-text-icon-right"]);
        }
        if (this.element.disabled) {
            this.attributeManager.addClasses(["ui-state-disabled"]);
        }

        if (this.icon) {
            let iconElement = document.createElement("span");
            let iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-c fa fa-fw ' + this.icon;
            this.element.appendChild(iconElement);
        }

        let labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-c';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-button'));
        this.element.appendChild(labelElement);
        this.element.addEventListener('focus', this.onFocus);
        this.element.addEventListener('mouseover', this.onMouseOver);
        this.element.addEventListener('mouseout', this.onMouseOut);
        this.element.addEventListener('mousedown', this.onMouseDown);
        this.element.addEventListener('mouseup', this.onMouseUp);
        this.element.addEventListener('blur', this.onBlur);
    }

    isDisabled() {
        return this.element.disabled;
    }


    detached() {
        this.element.removeEventListener('focus', this.onFocus);
        this.element.removeEventListener('mouseover', this.onMouseOver);
        this.element.removeEventListener('mouseout', this.onMouseOut);
        this.element.removeEventListener('mousedown', this.onMouseDown);
        this.element.removeEventListener('mouseup', this.onMouseUp);
        this.element.removeEventListener('blur', this.onBlur);
        while (this.element.hasChildNodes()) {
            this.element.removeChild(this.element.lastChild);
        }
    }
}
