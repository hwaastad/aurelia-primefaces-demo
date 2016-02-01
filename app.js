export class App {
  activemenuid: string
  themevisible: boolean=false;
  mobilemenuactive: boolean=false;

  toggleMenu(e){
    this.mobilemenuactive=!this.mobilemenuactive;
    e.preventDefault();
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'pages/welcome',      nav: true, title: 'Welcome' },
      { route: 'button',         name: 'button',        moduleId: 'pages/components/button',        nav: true, title: 'Button' },
      { route: 'inputtext',         name: 'inputtext',        moduleId: 'pages/components/inputtext',        nav: true, title: 'InputText' },
      { route: 'password',         name: 'password',        moduleId: 'pages/components/password',        nav: true, title: 'Password' },
      { route: 'rating',         name: 'rating',        moduleId: 'pages/components/rating',        nav: true, title: 'Rating' },
      { route: 'checkbox',         name: 'checkbox',        moduleId: 'pages/components/checkbox',        nav: true, title: 'Checkbox' },
      { route: 'accordion',         name: 'accordion',        moduleId: 'pages/components/accordion',        nav: true, title: 'Accordion' },
      { route: 'panel',         name: 'panel',        moduleId: 'pages/components/panel',        nav: true, title: 'Panel' },
      { route: 'growl',         name: 'growl',        moduleId: 'pages/components/growl',        nav: true, title: 'Growl' },
      { route: 'datatable',         name: 'datatable',        moduleId: 'pages/components/datatable',        nav: true, title: 'Datatable' },
      { route: 'tabview',         name: 'tabview',        moduleId: 'pages/components/tabview',        nav: true, title: 'Tabview' },
      { route: 'inputtextarea',         name: 'inputtextarea',        moduleId: 'pages/components/inputtextarea',        nav: true, title: 'InputTextArea' }
    ]);

    this.router = router;
  }
}
