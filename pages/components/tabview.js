export class DemoTabView {
  activeTabIndex: number = 1;

  changeTab() {
    var index = this.activeTabIndex;
    index++;
    if(index > 2) {
      index = 0;
    }

    this.activeTabIndex = index;
  }
  constructor() {
    
  }
}
