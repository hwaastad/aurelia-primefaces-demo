export function configure(frameworkConfig, configCallback){
  frameworkConfig.globalResources('panel');
  frameworkConfig.globalResources('./elements/checkbox');
  frameworkConfig.globalResources('./attributes/button');
  frameworkConfig.globalResources('./elements/rating');
  frameworkConfig.globalResources('./attributes/inputtext');
  frameworkConfig.globalResources('./elements/tabpanel');
  frameworkConfig.globalResources('./elements/tabview');
}
