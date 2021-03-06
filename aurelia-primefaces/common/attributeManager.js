
import {noView} from 'aurelia-framework';

export class AttributeManager {
    addedClasses = [];
    addedAttributes = {};

    constructor(element) {
        this.element = element;
    }

    addAttributes(attrs) {
        let keys = Object.keys(attrs);
        keys.forEach(k => {
            if (!this.element.getAttribute(k)) {
                this.addedAttributes[k] = attrs[k];
                this.element.setAttribute(k, attrs[k]);
            } else if (this.element.getAttribute(k) !== attrs[k]) {
                this.element.setAttribute(k, attrs[k]);
            }
        });
    }

    removeAttributes(attrs) {
        if (typeof attrs === 'string') {
            attrs = [attrs];
        }
        attrs.forEach(a => {
            if (this.element.getAttribute(a) && !!this.addedAttributes[a]) {
                this.element.removeAttribute(a);
                this.addedAttributes[a] = null;
                delete this.addedAttributes[a];
            }
        });
    }

    addClasses(classes) {
        if (typeof classes === 'string') {
            classes = [classes];
        }

        classes.forEach(c => {
            if (!this.element.classList.contains(c)) {
                this.addedClasses.push(c);
                this.element.classList.add(c);
            }
        });
    }

    removeClasses(classes) {
        if (typeof classes === 'string') {
            classes = [classes];
        }

        classes.forEach(c => {
            if (this.element.classList.contains(c) && this.addedClasses.indexOf(c) > -1) {
                this.element.classList.remove(c);
                this.addedClasses.splice(this.addedClasses.indexOf(c), 1);
            }
        });
    }
}