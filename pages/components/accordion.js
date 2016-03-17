import {Message} from '../../aurelia-primefaces/api/message';

export class DemoAccordion {
    msgs: Message[];
    onTabClose(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
    }

    onTabOpen(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    }
}
