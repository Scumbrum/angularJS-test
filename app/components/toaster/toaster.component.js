import ToasterController from './toaster.controller';

export const ToasterComponent = {
  templateUrl: '/components/toaster/toaster.component.html',
  controller: ToasterController,
  bindings: {
    duration: '<?'
  }
}; 