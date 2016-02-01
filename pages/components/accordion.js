export class DemoAccordion {
  activeTabIndex: number = 0;

  changeTab() {
    var index = this.activeTabIndex;
    index++;
    if(index > 2) {
      index = 0;
    }

    this.activeTabIndex = index;
  }

  updateTabEvent(event,ui){
    this.activeTabIndex=ui.index;
  }
}
