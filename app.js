import {bindable} from 'aurelia-framework';

export class App {
  message = 'hello world';
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

  bind(){
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
  }
}
