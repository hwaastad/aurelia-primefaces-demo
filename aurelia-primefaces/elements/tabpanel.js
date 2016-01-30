import {inject, customElement,bindable} from 'aurelia-framework';
import {TabViewComponent} from './tabview';

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
