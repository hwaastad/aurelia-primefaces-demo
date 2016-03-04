import {inject} from "aurelia-framework";

import {Header} from '../../../aurelia-primefaces/common/header';
import {Footer} from '../../../aurelia-primefaces/common/footer';
import {Paginator} from '../../../aurelia-primefaces/elements/paginator';
import {InputTextAttribute} from '../../../aurelia-primefaces/attributes/inputtext';

export class DemoDataTableLazy {

    constructor() {
        this.cars = [];
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'brand', header: 'Brand' },
            { field: 'year', header: 'Year' },
            { field: 'color', header: 'Color' }
        ];

        this.datasource = [
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
        this.totalRecords = this.datasource.length;
    }

    activate() {
        console.log('activating...');
        // return this.getAllCustomers();
    }

    loadCarsLazy(event) {
        console.log('loadCarsLazy.....');
        console.dir(event);
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        
        //imitate db connection over a network
        //this.cars = this.datasource;
          setTimeout(() => {
              this.cars = this.datasource.slice(event.first, (+event.first + +event.rows));
              console.dir(this.cars);
              console.log('returning....' + this.cars.length);
          }, 1000);
    }

}
