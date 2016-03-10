export class App {
    activemenuid: string
    themevisible: boolean = false;
    mobilemenuactive: boolean = false;

    toggleMenu(e) {
        this.mobilemenuactive = !this.mobilemenuactive;
        e.preventDefault();
    }

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'pages/welcome', nav: true, title: 'Welcome' },
            { route: 'button', name: 'button', moduleId: 'pages/components/button', nav: true, title: 'Button' },
            { route: 'inputtext', name: 'inputtext', moduleId: 'pages/components/inputtext', nav: true, title: 'InputText' },
            { route: 'password', name: 'password', moduleId: 'pages/components/password', nav: true, title: 'Password' },
            { route: 'rating', name: 'rating', moduleId: 'pages/components/rating', nav: true, title: 'Rating' },
            { route: 'checkbox', name: 'checkbox', moduleId: 'pages/components/checkbox', nav: true, title: 'Checkbox' },
            { route: 'accordion', name: 'accordion', moduleId: 'pages/components/accordion', nav: true, title: 'Accordion' },
            { route: 'panel', name: 'panel', moduleId: 'pages/components/panel', nav: true, title: 'Panel' },
            { route: 'growl', name: 'growl', moduleId: 'pages/components/growl', nav: true, title: 'Growl' },
            { route: 'datatable', name: 'datatable', moduleId: 'pages/components/datatable/index', nav: true, title: 'Datatable' },
            { route: 'tabview', name: 'tabview', moduleId: 'pages/components/tabview', nav: true, title: 'Tabview' },
            { route: 'inputtextarea', name: 'inputtextarea', moduleId: 'pages/components/inputtextarea', nav: true, title: 'InputTextArea' },
            { route: 'messages', name: 'messages', moduleId: 'pages/components/messages', nav: true, title: 'Messages' },
            { route: 'listbox', name: 'listbox', moduleId: 'pages/components/listbox', nav: true, title: 'ListBox' },
            { route: 'dialog', name: 'dialog', moduleId: 'pages/components/dialog', nav: true, title: 'Dialog' },
            { route: 'selectbutton', name: 'selectbutton', moduleId: 'pages/components/selectbutton', nav: true, title: 'SelectButton' },
            { route: 'radiobutton', name: 'radiobutton', moduleId: 'pages/components/radiobutton', nav: true, title: 'RadioButton' },
            { route: 'calendar', name: 'calendar', moduleId: 'pages/components/calendar', nav: true, title: 'Calendar' },
            { route: 'dropdown', name: 'dropdown', moduleId: 'pages/components/dropdown', nav: true, title: 'DropDown' },
            { route: 'spinner', name: 'spinner', moduleId: 'pages/components/spinner', nav: true, title: 'Spinner' },
            { route: 'toggelbutton', name: 'toggelbutton', moduleId: 'pages/components/toggelbutton', nav: true, title: 'ToggelButton' },
            { route: 'inputswitch', name: 'inputswitch', moduleId: 'pages/components/inputswitch', nav: true, title: 'InputSwitch' },
            { route: 'progressbar', name: 'progressbar', moduleId: 'pages/components/progressbar', nav: true, title: 'ProgressBar' },
            { route: 'fieldset', name: 'fieldset', moduleId: 'pages/components/fieldset', nav: true, title: 'FieldSet' },
            { route: 'galleria', name: 'galleria', moduleId: 'pages/components/galleria', nav: true, title: 'Galleria' },
            { route: 'barchart', name: 'barchart', moduleId: 'pages/components/barchart', nav: true, title: 'BarChart' },
            { route: 'linechart', name: 'linechart', moduleId: 'pages/components/linechart', nav: true, title: 'LineChart' },
            { route: 'piechart', name: 'piechart', moduleId: 'pages/components/piechart', nav: true, title: 'PieChart' },
            { route: 'breadcrumb', name: 'breadcrumb', moduleId: 'pages/components/breadcrumb', nav: true, title: 'BreadCrumb' },
            { route: 'menu', name: 'menu', moduleId: 'pages/components/menu', nav: true, title: 'Menu' },
            { route: 'menubar', name: 'menubar', moduleId: 'pages/components/menubar', nav: true, title: 'MenuBar' },
            { route: 'tieredmenu', name: 'tieredmenu', moduleId: 'pages/components/tieredmenu', nav: true, title: 'TieredMenu' },
            { route: 'slidemenu', name: 'slidemenu', moduleId: 'pages/components/slidemenu', nav: true, title: 'SlideMenu' },
            { route: 'megamenu', name: 'megamenu', moduleId: 'pages/components/megamenu', nav: true, title: 'MegaMenu' },
            { route: 'lightbox', name: 'lightbox', moduleId: 'pages/components/lightbox', nav: true, title: 'LightBox' },
            { route: 'paginator', name: 'paginator', moduleId: 'pages/components/paginator', nav: true, title: 'Paginator' },
            { route: 'slider', name: 'slider', moduleId: 'pages/components/slider', nav: true, title: 'Slider' },
            { route: 'panelmenu', name: 'panelmenu', moduleId: 'pages/components/panelmenu', nav: true, title: 'PanelMenu' }
        ]);

        this.router = router;
    }
}
