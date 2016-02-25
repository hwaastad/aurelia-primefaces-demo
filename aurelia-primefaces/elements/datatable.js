import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-datatable')
@inject(Element)
export class DataTableComponent {
    @bindable columns = undefined;
    @bindable paginator = undefined;
    @bindable rows = undefined;
    @bindable totalRecords = undefined;
    @bindable pageLinks = 5;
    @bindable responsive = undefined;
    @bindable selectionMode = undefined;
    @bindable selection = undefined;
    @bindable selectionChange = undefined;
    @bindable editable = undefined;
    @bindable onRowSelect = undefined;
    @bindable onRowUnselect = undefined;
    @bindable filterDelay = 300;
    @bindable lazy = undefined;
    @bindable resizableColumns = undefined;
    @bindable columnResizeMode = undefined;
    @bindable onColResize = undefined;
    @bindable reorderableColumns = undefined;
    @bindable onColReorder = undefined;
    @bindable scrollable = undefined;
    @bindable scrollHeight = undefined;
    @bindable scrollWidth = undefined;
    @bindable headerColumns = undefined;
    @bindable style = undefined;
    @bindable styleClass = undefined;
    @bindable headerRows;
    @bindable footerRows;

    @bindable value: any[];
    dataToRender: any[];
    first: number = 0;
    sortField: string;
    sortOrder: number;
    filterTimeout: any;
    filterMetadata: any = {};
    filteredValue: any[];


    constructor(element) {
        console.log('constructing datatable');
        this.element = element;
    }

    bind() {
        console.log('binding datatable');
        console.dir(this.value);
        this.updateDataToRender(this.value);
    }

    attached() {
        console.log('attaching datatable');
        if (this.resizableColumns) {
            this.initResizableColumns();
        }

        if (this.reorderableColumns) {
            this.initColumnReordering();
        }

        if (this.scrollable) {
            this.initScrolling();
        }
    }

    paginate(event) {
        this.first = event.first;
        this.rows = event.rows;
        this.updateDataToRender(this.value);
    }

    updateDataToRender(datasource) {
        if (this.paginator && datasource) {
            console.dir(this.paginator);
            console.dir(datasource.length);
            this.dataToRender = [];
            let i = this.first;
            for (let i = this.first; i < (+this.first + +this.rows); i++) {
                if (i >= datasource.length) {
                    console.log('break');
                    break;
                }

                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
    }

    sort(column: Column) {
        if (!column.sortable) {
            return;
        }

        if (this.value) {
            this.sortOrder = (this.sortField === column.field) ? this.sortOrder * -1 : 1;
            this.sortField = column.field;

            this.value.sort((data1, data2) => {
                let value1 = data1[this.sortField],
                    value2 = data2[this.sortField],
                    result = null;

                if (value1 instanceof String && value2 instanceof String)
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.sortOrder * result);
            });

            this.first = 0;

            if (this.hasFilter())
                this.filter();
            else
                this.updateDataToRender(this.value);
        }
    }

    selectionChanged(newVal, oldVal) {
        console.log('selection has changed: ' + oldVal + ' => ' + newVal);
        this.selection = newVal;
    }

    onRowClick(event, rowData) {
        console.log('Datatable onRowClick.....');
        console.dir(event);
        console.dir(rowData);
        if (!this.selectionMode) {
            return;
        }

        let selectionIndex = this.findIndexInSelection(rowData),
            selected = selectionIndex != -1;

        if (selected && event.ctrlKey) {
            if (this.isSingleSelectionMode()) {
                this.selection = null;
                if (this.selectionChange) {
                    this.selectionChange(null);
                }
            }
            else {
                this.selection.splice(selectionIndex, 1);
                if (this.selectionChange) {
                    this.selectionChange(this.selection);
                }
            }
            if (this.onRowUnselect) {
                this.onRowUnselect({ originalEvent: event, data: rowData });
            }
        }
        else {
            if (this.isSingleSelectionMode()) {
                this.selection=rowData;
                if (this.selectionChange) {
                    this.selectionChange(rowData);
                }
            }
            else if (this.isMultipleSelectionMode()) {
                this.selection = (!event.ctrlKey) ? [] : this.selection || [];
                this.selection.push(rowData);
                if (this.selectionChange) {
                    this.selectionChange(this.selection);
                }
            }
            if (this.onRowSelect) {
                this.onRowSelect({ originalEvent: event, data: rowData });
            }
        }
    }

    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }

    findIndexInSelection(rowData: any) {
        let index: number = -1;

        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == rowData) ? 0 : - 1;
            }
            else if (this.isMultipleSelectionMode()) {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == rowData) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }

    isSelected(rowData) {
        return this.findIndexInSelection(rowData) != -1;
    }

    onFilterKeyup(value, field, matchMode) {
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }

        this.filterTimeout = setTimeout(() => {
            this.filterMetadata[field] = { value: value, matchMode: matchMode };
            this.filter();
            this.filterTimeout = null;
        }, this.filterDelay);
    }

    filter() {
        if (this.lazy) {
            //TODO
        }
        else {
            this.filteredValue = [];

            for (let i = 0; i < this.value.length; i++) {
                let localMatch = true;

                for (let prop in this.filterMetadata) {
                    if (this.filterMetadata.hasOwnProperty(prop)) {
                        let filterMeta = this.filterMetadata[prop],
                            filterValue = filterMeta.value,
                            filterField = prop,
                            filterMatchMode = filterMeta.matchMode || 'startsWith',
                            dataFieldValue = this.value[i][filterField];

                        var filterConstraint = this.filterConstraints[filterMatchMode];
                        if (!filterConstraint(dataFieldValue, filterValue)) {
                            localMatch = false;
                        }

                        if (!localMatch) {
                            break;
                        }
                    }
                }

                if (localMatch) {
                    this.filteredValue.push(this.value[i]);
                }
            }

            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }

            if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }

            this.updateDataToRender(this.filteredValue || this.value);
        }
    }

    hasFilter() {
        let empty = true;
        for (let prop in this.filterMetadata) {
            if (this.filterMetadata.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }

        return !empty;
    }

    filterConstraints = {

        startsWith(value, filter): boolean {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString().toLowerCase().slice(0, filter.length) === filter;
        },

        contains(value, filter): boolean {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString().toLowerCase().indexOf(filter) !== -1;
        },

        endsWith(value, filter): boolean {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.indexOf(filter, value.length - filter.length) !== -1;
        }
    }

    switchCellToEditMode(element: any) {
        if (!this.selectionMode && this.editable) {
            let cell = this.findCell(element);
            cell.classList.add('ui-cell-editing', 'ui-state-highlight');
            let editor = cell.querySelector('.ui-cell-editor').focus();
        }
    }

    switchCellToViewMode(element: any) {
        if (this.editable) {
            let cell = this.findCell(element);
            cell.classList.remove('ui-cell-editing', 'ui-state-highlight');
        }
    }

    onCellEditorKeydown(event) {
        if (this.editable) {
            if (event.keyCode == 13) {
                this.switchCellToViewMode(event.target);
            }
        }
    }

    findCell(element) {
        let cell = element;
        while (cell.tagName != 'TD') {
            cell = cell.parentElement;
        }

        return cell;
    }

    initResizableColumns() {
        $(this.element.children[0]).puicolresize({
            mode: this.columnResizeMode,
            colResize: (event: Event, ui: PrimeUI.ColResizeEventParams) => {
                if (this.onColResize) {
                    this.onColResize(ui.element);
                }
            }
        });
    }

    initColumnReordering() {
        $(this.element.children[0]).puicolreorder({
            colReorder: (event: Event, ui: PrimeUI.ColReorderEventParams) => {
                //right
                if (ui.dropSide > 0) {
                    this.columns.splice(ui.dropIndex + 1, 0, this.columns.splice(ui.dragIndex, 1)[0]);
                }
                //left
                else {
                    this.columns.splice(ui.dropIndex, 0, this.columns.splice(ui.dragIndex, 1)[0]);
                }
                if (this.onColReorder) {
                    this.onColReorder(ui);
                }
            }
        });
    }

    initScrolling() {
        $(this.element.children[0]).puitablescroll({
            scrollHeight: this.scrollHeight,
            scrollWidth: this.scrollWidth
        });
    }

    detached() {
        if (this.resizableColumns) {
            $(this.element.children[0]).puicolresize('destroy');
        }
    }

    dispatchChange(data) {
        let detail = { selection: data };
        let eventInit = { detail, bubbles: true };
        let event = new CustomEvent('change', eventInit);
        this.element.dispatchEvent(event);
    }
}
