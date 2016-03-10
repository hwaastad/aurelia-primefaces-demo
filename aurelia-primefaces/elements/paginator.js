import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-paginator')
@inject(Element)
export class Paginator {
    @bindable totalRecords = 0;
    @bindable rows = 0;
    @bindable page = 0;
    @bindable pageLinkSize = 5;
    @bindable onPageChange;
    @bindable style = undefined;
    @bindable styleClass = undefined;
    pageLinks = [];

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.updatePageLinks();
    }

    get firstPage() {
        return this.page === 0;
    }

    get lastPage() {
        return this.page === this.getPageCount() - 1;
    }

    isLastPage() {
        return this.page === this.getPageCount() - 1;
    }

    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }

    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(),
            visiblePages = Math.min(this.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.page - ((visiblePages) / 2))),
            end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }

    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(),
            start = boundaries[0],
            end = boundaries[1];

        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }

    changePage(p: number) {
        var pc = this.getPageCount();

        if (p >= 0 && p < pc) {
            var state = {
                first: this.rows * p,
                rows: this.rows,
                page: p,
                pageCount: pc
            };

            this.page = p;

            this.updatePageLinks();
            if (this.onPageChange) {
                this.onPageChange(state);
            }
        }

    }

    changePageToFirst() {
        this.changePage(0);
    }

    changePageToPrev() {
        this.changePage(this.page - 1);
    }

    changePageToNext() {
        this.changePage(this.page + 1);
    }

    changePageToLast() {
        this.changePage(this.getPageCount() - 1);
    }
}