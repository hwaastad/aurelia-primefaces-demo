import {inject, customAttribute, bindable} from 'aurelia-framework';

@customAttribute('p-spinner')
@inject(Element)
export class SpinnerDirective {
    @bindable step = undefined;
    @bindable min = undefined;
    @bindable max = undefined;
    @bindable prefix = undefined;
    @bindable suffix = undefined;
    @bindable disabled = undefined;

    @bindable value;

    initialized: boolean;

    constructor(element) {
        this.element = element;
    }

    bind() {
        $(this.element).puispinner({
            step: this.step,
            min: this.min,
            max: this.max,
            prefix: this.prefix,
            suffix: this.suffix
        });
        this.initialized = true;
    }

    stepChanges(newValue, oldValue) {
        console.log('change...');
    }

    valueChanged(newValue, oldValue) {
        console.log('change model...');
    }

    detached() {
        $(this.element).puispinner('destroy');
        this.initialized = false;
    }

}