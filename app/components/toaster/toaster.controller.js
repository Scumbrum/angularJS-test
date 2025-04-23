export default class ToasterController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.isVisible = false;
    this.message = '';
    this.type = 'success';
    this.duration = 3000; // Default duration in milliseconds
  }

  $onInit() {
    this.close = this.close.bind(this);
  }

  show(message, type = 'success', duration = this.duration) {
    this.message = message;
    this.type = type;
    this.isVisible = true;

    // Auto-hide the toaster after duration
    this.$timeout(() => {
      this.close();
    }, duration);
  }

  close() {
    this.isVisible = false;
  }
}

ToasterController.$inject = ['$timeout']; 