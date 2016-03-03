import {inject, customElement,bindable} from 'aurelia-framework';
import {TabViewComponent} from './tabview';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-tabpanel')
@inject(TabViewComponent)
export class TabPanelComponent {
  @bindable header: string;
  @bindable closable: boolean;

  constructor(tabview){
    //console.log('constructing tabpanel....');
    tabview.addTab(this);
  }

  attached(){

  }
}
