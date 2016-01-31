//import {bindable} from 'aurelia-framework';

export class App {
  activemenuid: string
  themevisible: boolean=false;
  mobilemenuactive: boolean=false;

  toggleMenu(e){
    this.mobilemenuactive=!this.mobilemenuactive;
    e.preventDefault();
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'pages/welcome',      nav: true, title: 'Welcome' },
      { route: 'button',         name: 'button',        moduleId: 'pages/components/button',        nav: true, title: 'Button' },
      { route: 'inputtext',         name: 'inputtext',        moduleId: 'pages/components/inputtext',        nav: true, title: 'InputText' },
      { route: 'password',         name: 'password',        moduleId: 'pages/components/password',        nav: true, title: 'Password' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
  /*  message = 'hello world';
  selectedCities: string[] = [];
  selectedCategories: string[] = ['Technology', 'Sports'];
  val1: number;
  val2: number = 5;
  val3: number;
  val4 = 5;
  msg: string;
  text: string;
  disabled:boolean = true;

  activeTabIndex: number = 1;

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

bind(){
}

sendAlert(growl){
$('#'+growl).puigrowl('show', [{severity: 'error', summary: 'Message Summary', detail: 'Message Detail'}]);
}

handleRate(event) {
this.msg = "You have rated " + event.value;
this.val4=event.value;
}

handleCancel(event) {
this.msg = "Rating Cancelled";
this.val4=null;
}

toggleDisabled() {
this.disabled = !this.disabled;
}

closePanel(){
console.log('closing panel');
}

collapsePanel(){
console.log('collapsing panel');
}*/
}
