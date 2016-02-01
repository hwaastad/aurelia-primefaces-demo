export function configure(frameworkConfig, configCallback){
  frameworkConfig.globalResources('./attributes/button');
  frameworkConfig.globalResources('./attributes/password');
  frameworkConfig.globalResources('./attributes/inputtextarea');
  frameworkConfig.globalResources('./attributes/inputtext');
  frameworkConfig.globalResources('./elements/tabpanel');
  frameworkConfig.globalResources('./elements/tabview');
  frameworkConfig.globalResources('./elements/accordion');
  frameworkConfig.globalResources('./elements/accordiontab');
  frameworkConfig.globalResources('./elements/datatable');
  frameworkConfig.globalResources('./elements/growl');
  frameworkConfig.globalResources('./elements/panel');
  frameworkConfig.globalResources('./elements/checkbox');
  frameworkConfig.globalResources('./elements/rating');
  frameworkConfig.globalResources('./elements/messages');
  frameworkConfig.globalResources('./elements/listbox');
}
