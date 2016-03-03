import {inject, customElement} from 'aurelia-framework';
@customElement('header')
@inject(Element)
export class Header {

    constructor(element) {
        console.log('contructing header....');
        this.element = element;
    }
}