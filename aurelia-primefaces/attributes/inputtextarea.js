import {inject, customAttribute, bindable} from 'aurelia-framework';

@customAttribute('p-inputtextarea')
@inject(Element)
export class InputTextAreaAttribute {
    @bindable autoResize = undefined;
    @bindable disabled;



    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        console.log('resize: ' + this.autoResize);
        $(this.element).puiinputtextarea({
            autoResize: this.autoResize
        });
        this.initialized = true;
    }

    detached() {
        $(this.element).puiinputtextarea('destroy');
        this.initialized = false;
    }

}
