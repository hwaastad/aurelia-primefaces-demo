import {inject, customElement,bindable} from 'aurelia-framework';


@customElement('p-datatable')
@inject(Element)
export class DataTableComponent {
  @bindable columns;
  @bindable datasource;
  @bindable caption;
  @bindable paginator;
  @bindable lazy;


  constructor(element){
    console.log('constructing datatable');
    this.element=element;
  }

  attached(){
    console.log('attaching datatable ' + this.paginator);
    $(this.element).puidatatable({
      caption: this.caption,
      paginator: this.paginator,
      lazy: this.lazy,
      columns: this.columns,
      datasource:this.datasource
    });
  }
}
