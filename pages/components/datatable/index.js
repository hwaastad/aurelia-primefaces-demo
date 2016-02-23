
export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'datatable'], moduleId: './datatable', nav: true, name: 'datatable', title: 'Basic' },
            { route: 'datatablefilter', moduleId: './datatablefilter', nav: true, name: 'datatablefilter', title: 'Filter' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Scroll*' },
            { route: 'datatablefacet', moduleId: './datatablefacet', nav: true, name: 'datatablefacet', title: 'Facet' },
            { route: 'datatableselection', moduleId: './datatableselection', nav: true, name: 'datatableselection', title: 'Selection*' },
            { route: 'datatableresponsive', moduleId: './datatableresponsive', nav: true, name: 'datatableresponsive', title: 'Responsive' },
            { route: 'datatablepaginator', moduleId: './datatablepaginator', nav: true, name: 'datatablepaginator', title: 'Paginator' },
            { route: 'datatablereorder', moduleId: './datatablereorder', nav: true, name: 'datatablereorder', title: 'Column Reorder*' },
            { route: 'datatableedit', moduleId: './datatableedit', nav: true, name: 'datatableedit', title: 'Editable*' },
            /*   { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Group*' },
               
               { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Columns Resize*' },
               { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Sort*' },
               */
        ]);

        this.router = router;
    }
}