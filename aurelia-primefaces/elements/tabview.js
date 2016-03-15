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
//@sync({ name: "tabs", selector: "tab" })
export class TabViewComponent {
    @children('div')
    tabs;

    @bindable selectedTab = null;
    @bindable selectedIndex = 0;

    // This is a bindable callback that will fire when the selected tab changes
    @bindable tabChanged;

    // This allows the parent viewmodel to be referenced as `$parent`
    bind(ctx) {
        this["$parent"] = ctx;
        console.dir(this.tabs);
    }

    selectedTabChanged() {
        this.onTabChanged();
    }

    tabsChanged() {
        if (this.tabs.length > 0) {
            if (this.selectedIndex >= this.tabs.length)
                this.selectedTab = this.tabs[0];
            else
                this.selectedTab = this.tabs[this.selectedIndex];
        }
        else
            this.selectedTab = null;

        this.updateVisibility();
    }

    onTabChanged() {
        // Raise the event if a tab changes
        if (this.tabChanged)
            this.tabChanged(this.selectedTab);
    }

    selectTab(tab: any) {
        this.selectedTab = tab;

        // Find tab index
        var i = 0;
        this.tabs.forEach(t => { if (t === this.selectedTab) this.selectedIndex = i; i++ })

        this.updateVisibility();
    }

    updateVisibility() {
        this.tabs.forEach(tab => {
            tab.contentVisible = tab === this.selectedTab;
        });
    }
}
