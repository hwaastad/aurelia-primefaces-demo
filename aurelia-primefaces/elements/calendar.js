import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/themes/delta/theme.css!';
import 'primeui/primeui.css!';
import 'fontawesome/css/font-awesome.css!';

@customElement('p-calendar')
@inject(Element)
export class CalendarComponent {
    @bindable value: string;
    @bindable readonlyInput;
    @bindable style;
    @bindable styleClass;
    @bindable placeholder;
    @bindable inline = false;
    @bindable showAnim;
    @bindable dateFormat= undefined;
    @bindable showButtonPanel = undefined;
    @bindable monthNavigator;
    @bindable yearNavigator;
    @bindable numberOfMonths;
    @bindable showWeek;
    @bindable showOtherMonths;
    @bindable selectOtherMonths;
    @bindable defaultDate;
    @bindable minDate;
    @bindable maxDate;
    @bindable disabled

    hovered: boolean;
    focused: boolean;
    initialized: boolean;
    stopNgOnChangesPropagation: boolean;

    constructor(element) {
        this.element = element;
    }

    attached() {
        setTimeout(() => {
            $(this.element.children[0]).datepicker({
                showAnim: this.showAnim,
                dateFormat: this.dateFormat,
                showButtonPanel: this.showButtonPanel,
                changeMonth: this.monthNavigator,
                changeYear: this.yearNavigator,
                numberOfMonths: this.numberOfMonths,
                showWeek: this.showWeek,
                showOtherMonths: this.showOtherMonths,
                selectOtherMonths: this.selectOtherMonths,
                readonlyInput: this.readonlyInput,
                defaultDate: this.defaultDate,
                minDate: this.minDate,
                maxDate: this.maxDate,
                onSelect: (dateText: string) => {
                    this.value = dateText;
                    this.stopNgOnChangesPropagation = true;
                    // this.onSelect.next(dateText);
                    //this.valueChange.next(dateText);
                }
            });
            this.initialized = true;
        }, 10);
    }

    valueChanged(newValue, oldValue)  {
        console.log('Value changed: ' + oldValue + '=>' + newValue);
    }

    detached() {
        $(this.element.children[0]).datepicker('destroy');
    }
}