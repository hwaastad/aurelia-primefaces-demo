export class DemoGrowl {

  sendAlert(growl){
    $('#'+growl).puigrowl('show', [{severity: 'error', summary: 'Message Summary', detail: 'Message Detail'}]);
  }
}
