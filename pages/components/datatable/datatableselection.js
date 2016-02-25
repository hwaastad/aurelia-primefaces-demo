import {inject,bindable} from "aurelia-framework";

import {Header} from '../../../aurelia-primefaces/common/header';
import {Footer} from '../../../aurelia-primefaces/common/footer';
import {Paginator} from '../../../aurelia-primefaces/elements/paginator';
import {InputTextAttribute} from '../../../aurelia-primefaces/attributes/inputtext';
import {Message} from '../../../aurelia-primefaces/api/message';

export class DemoDataTable {
    cols;
    cars;
    selectedCar=undefined;
    selectedCar2;
    selectedCars;
    
    constructor() {
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'brand', header: 'Brand' },
            { field: 'year', header: 'Year' },
            { field: 'color', header: 'Color' }
        ];
        this.cars = [
            { 'brand': 'Volkswagen', 'year': 2012, 'color': 'White', 'vin': 'dsad231ff' },
            { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
            { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
            { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
            { 'brand': 'Mercedes', 'year': 1995, 'color': 'White', 'vin': 'hrtwy34' },
            { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
            { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
            { 'brand': 'Jaguar', 'year': 2013, 'color': 'White', 'vin': 'greg34' },
            { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
            { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' }
        ];
    }

    activate() {
        console.log('activating...');
    }
    
    onRowSelect(event) {
        console.log('onRowSelect...'),
        //this.selectedCar = event.data;
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand});
    }

    onRowUnselect(event) {
        console.log('onRowUnSelect...')
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand});
    }

}
