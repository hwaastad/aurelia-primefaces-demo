import {Message} from '../../aurelia-primefaces/api/message';
export class DemoTabView {
    msgs: Message[];

    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    }
}
