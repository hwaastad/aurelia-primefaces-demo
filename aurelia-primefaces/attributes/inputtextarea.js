import {inject, customAttribute, bindable} from 'aurelia-framework';
import {AttributeManager} from '../common/attributeManager';

@customAttribute('p-inputtextarea')
@inject(Element)
export class InputTextAreaAttributeNative {
    @bindable autoResize = undefined;
    @bindable disabled;
    @bindable rows;
    @bindable cols;


    constructor(element) {
        this.element = element;
        this.attributeManager = new AttributeManager(element);
        this.onFocus = e => {
            this.attributeManager.addClasses("ui-state-focus");
            this.focus = true;

            if (this.autoResize) {
                this.resize();
            }
        }
        this.onMouseOver = e => {
            this.attributeManager.addClasses("ui-state-hover");
            this.hover = true;
        }
        this.onMouseOut = e => {
            this.attributeManager.removeClasses(["ui-state-hover"]);
            this.hover = false;
        }
        this.onBlur = e => {
            this.attributeManager.removeClasses(["ui-state-focus"]);
            this.focus = false;

            if (this.autoResize) {
                this.resize();
            }
        }
        this.onKeyUp = e => {
            if (this.autoResize) {
                this.resize();
            }
        }
    }

    attached() {
        this.rowsDefault = this.rows;
        this.colsDefault = this.cols;
        this.attributeManager.addClasses(["ui-inputtext", "ui-corner-all", "ui-state-default", "ui-widget"]);
        this.element.addEventListener('focus', this.onFocus);
        this.element.addEventListener('mouseover', this.onMouseOver);
        this.element.addEventListener('mouseout', this.onMouseOut);
        this.element.addEventListener('blur', this.onBlur);
        this.element.addEventListener('keyup', this.onKeyUp);
    }

    detached() {
        this.element.removeEventListener('focus', this.onFocus);
        this.element.removeEventListener('mouseover', this.onMouseOver);
        this.element.removeEventListener('mouseout', this.onMouseOut);
        this.element.removeEventListener('blur', this.onBlur);
        this.element.removeEventListener('keyup', this.onKeyUp);
    }
    

    resize() {
        let linesCount = 0,
            lines = this.element.value.split('\n');

        for (let i = lines.length - 1; i >= 0; --i) {
            linesCount += Math.floor((lines[i].length / this.colsDefault) + 1);
        }

        this.rows = (linesCount >= this.rowsDefault) ? (linesCount + 1) : this.rowsDefault;
        this.attributeManager.addAttributes({ 'rows': this.rows});
    }

}
