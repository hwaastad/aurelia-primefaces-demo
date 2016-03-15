import {inject, customElement, bindable} from 'aurelia-framework';
//import {TabViewComponent} from './tabview';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-tabpanel')
export class TabPanelComponent {
    @bindable heading = "Tab";

    constructor() {
        this.isSelected = false;
    }
}
