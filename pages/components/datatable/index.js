
export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'datatable'], moduleId: './datatable', nav: true, name: 'datatable', title: 'Basic' },
            { route: 'datatablefilter', moduleId: './datatablefilter', nav: true, name: 'datatablefilter', title: 'Filter' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Scroll*' },
            { route: 'datatablefacet', moduleId: './datatablefacet', nav: true, name: 'datatablefacet', title: 'Facet' },
            { route: 'datatableselection', moduleId: './datatableselection', nav: true, name: 'datatableselection', title: 'Selection*' },
         /*   { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Responsive*' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Group*' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Editable*' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Paginator*' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Columns Resize*' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Sort*' },
            { route: 'datatablescroll', moduleId: './datatablescroll', nav: true, name: 'datatablescroll', title: 'Column Reorder*' },*/
        ]);

        this.router = router;
    }
}