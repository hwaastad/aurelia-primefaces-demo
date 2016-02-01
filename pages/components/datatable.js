import {inject} from "aurelia-framework";
import {CustomerData} from './model/CustomerData';

@inject(CustomerData)
export class DemoDataTable {
  mydatasource=[];
  mycolumns=[
    {field: 'id', headerText: 'Id'},
    {field: 'firstName', headerText: 'FirstName'},
    {field: 'lastName', headerText: 'LastName'}
  ];

  columns= [
    {field: 'vin', headerText: 'Vin'},
    {field: 'brand', headerText: 'Brand'},
    {field: 'year', headerText: 'Year'},
    {field: 'color', headerText: 'Color'}
  ];

  datasource=[
    {'brand': 'Volkswagen', 'year': 2012, 'color': 'White', 'vin': 'dsad231ff'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'White', 'vin': 'hrtwy34'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'White', 'vin': 'greg34'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s'}
  ];

  constructor(customerData){
    this.customerData=customerData;
  }

  activate(){
    console.log('activating...');
    return this.getAllCustomers();
  }

  getAllCustomers(){
    return this.customerData.getAll().then(
      data =>{
        this.mydatasource=data;
      });
    }
  }
