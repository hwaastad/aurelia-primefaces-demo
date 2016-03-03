import {inject} from "aurelia-framework";

import {Header} from '../../../aurelia-primefaces/common/header';
import {Footer} from '../../../aurelia-primefaces/common/footer';
import {Paginator} from '../../../aurelia-primefaces/elements/paginator';
import {InputTextAttribute} from '../../../aurelia-primefaces/attributes/inputtext';

export class DemoDataTableScroll {



    constructor() {
        this.cols1 = [
            { field: 'vin', header: 'Vin', },
            { field: 'brand', header: 'Brand' },
            { field: 'year', header: 'Year' },
            { field: 'color', header: 'Color' }
        ];

        this.cols2 = [
            { field: 'vin', header: 'Vin', style: 'width:250px' },
            { field: 'brand', header: 'Brand', style: 'width:250px' },
            { field: 'year', header: 'Year', style: 'width:250px' },
            { field: 'color', header: 'Color', style: 'width:250px' }
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
}
