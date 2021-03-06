import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-dropdown')
@inject(Element)
export class DropDownComponent {
    @bindable options=undefined;
    @bindable value=undefined;
    @bindable scrollHeight=undefined;
    @bindable customContent=undefined;
    @bindable filter=undefined;
    @bindable filterMatchMode=undefined;
    @bindable style=undefined;
    @bindable styleClass=undefined;
    
    selectElement;

    initialized: boolean;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.selectElement = $(this.element).find(' > .ui-dropdown > div > select');
        this.selectElement.puidropdown({
            enhanced: true,
            value: this.value,
            filter: this.filter,
            filterMatchMode: this.filterMatchMode,
            style: this.style,
            styleClass: this.styleClass,
            change: (event: Event, ui: DropdownEventParams) => {
                var selectedValue = this.options[ui.index].value;
                console.log('selected value: ' + selectedValue);
                this.value = selectedValue;
                // this.onChange.emit({ originalEvent: event, value: selectedValue });
                //this.valueChange.emit(selectedValue);
            }
        });
        this.initialized = true;
    }

    valueChanged(newValue, oldValue) {
        console.log('Value changed...');
        if (this.initialized) {
            this.selectElement.puidropdown('option', 'value', newValue);
        }
    }

    detached() {
        this.selectElement.puidropdown('destroy');
    }
}

function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
}

function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
}