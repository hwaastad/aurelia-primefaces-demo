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
  }

  isDisabled() {
    return this.element.disabled;
  }


  detached() {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.lastChild);
    }
  }
}
