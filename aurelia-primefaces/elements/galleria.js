import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-galleria')
@inject(Element)
export class GalleriaComponent {
    @bindable panelWidth = undefined;
    @bindable panelHeight = undefined;
    @bindable frameWidth = undefined;
    @bindable activeIndex = undefined;
    @bindable showFilmstrip = true;
    @bindable autoPlay = true;
    @bindable transitionInterval = undefined;
    @bindable effect = undefined;
    @bindable effectDuration = undefined;
    @bindable showCaption = true;
    @bindable customContent = undefined;

    initialized;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        $(this.element.children[0]).puigalleria({
            panelWidth: this.panelWidth,
            panelHeight: this.panelHeight,
            frameWidth: this.frameWidth,
            activeIndex: this.activeIndex,
            showFilmstrip: this.showFilmstrip,
            autoPlay: this.autoPlay,
            transitionInterval: this.transitionInterval,
            effect: this.effect,
            effectSpeed: this.effectDuration,
            showCaption: this.showCaption,
            customContent: this.customContent
        });
        this.initialized = true;
    }

    propertyChanged(property, newValue, oldValue) {
        console.log('property change: ' + property + ' newValue: ' + newValue + ' (old: ' + oldValue + ')');
        if (this.initialized) {
            $(this.element.children[0]).puigalleria('options', property, newValue);
        }
    }

    detached() {
        $(this.element.children[0]).puigalleria('destroy');
        this.initialized = false;
    }
}