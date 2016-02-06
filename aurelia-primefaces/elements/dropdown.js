import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('p-dropdown')
@inject(Element)
export class DropDownComponent {
    @bindable options;
    @bindable value;
    @bindable scrollHeight;
    @bindable customContent;
    @bindable filter;
    @bindable filterMatchMode;
    @bindable style;
    @bindable styleClass;
    
    selectElement;

    initialized: boolean;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.selectElement = $(this.element).find(' > .pui-dropdown > div > select');
        console.dir(this.selectElement);
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