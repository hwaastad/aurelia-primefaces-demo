import {inject, customElement, bindable, children} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';
//import {TabPanelComponent} from './tabpanel';

@customElement('p-tabview')
@inject(Element)
export class TabViewComponent {
    tabs=[];
    @bindable selectedItem;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.tabs = this.element.querySelectorAll('p-tabpanel');
        console.dir(this.tabs);
    }

    tabsChanged(mutations) {
        if (this.tabs.length > 0) {
            if (!this.selectedItem || this.tabs.indexOf(this.selectedItem) === -1) {
                this.selectItem(this.tabs[0]);
            }
        }
    }

    selectItem(item) {
        if (this.selectedItem) {
            this.selectedItem.isSelected = false;
        }

        this.selectedItem = item;

        if (this.selectedItem) {
            this.selectedItem.isSelected = true;
        }
    }
}
