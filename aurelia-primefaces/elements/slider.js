import {inject, bindable,customElement} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-slider')
@inject(Element)
export class SliderComponent {
    @bindable animate=undefined;
    @bindable disabled=undefined;
    @bindable min=undefined;
    @bindable max=undefined;
    @bindable orientation=undefined;
    @bindable value;
    @bindable values;
    @bindable step=undefined;
    @bindable range=undefined;
    @bindable style=undefined;
    @bindable styleClass=undefined;
    @bindable onChange=undefined;
    @bindable valueChange=undefined;
    @bindable valuesChange=undefined;

    initialized;
    stopNgOnChangesPropagation;

    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element.children[0]).slider({
            animate: this.animate,
            disabled: this.disabled,
            max: this.max,
            min: this.min,
            orientation: this.orientation,
            range: this.range,
            step: this.step,
            value: this.value,
            values: this.values,
            slide: (event: Event, ui: SliderUIParams) => {
                this.stopNgOnChangesPropagation = true;

                if (this.range) {
                    this.values=ui.values;
                    if (this.onChange) {
                        this.onChange({ originalEvent: event, values: ui.values });
                    }
                    if (this.valueChange) {
                        this.valuesChange(ui.values);
                    }
                }
                else {
                    this.value=ui.value;
                    if (this.onChange) {
                        this.onChange({ originalEvent: event, value: ui.value });
                    }
                    if (this.valueChange) {
                        this.valueChange(ui.value);
                    }
                }
            }
        });
        this.initialized = true;
    }

    valueChanged(newVal, oldVal) {
        if (this.initialized) {
            if (this.stopNgOnChangesPropagation) {
                this.stopNgOnChangesPropagation = false;
                return;
            }

            $(this.element.children[0]).slider('option', 'value', newVal);
        }
    }

    detached() {
        $(this.element.children[0]).slider('destroy');
        this.initialized = false;
    }
}