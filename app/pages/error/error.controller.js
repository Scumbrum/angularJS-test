export default class ErrorController {
  constructor($routeParams, $location) {
    this.$routeParams = $routeParams;
    this.$location= $location;
    this.errorMessages = {
      '403': 'Forbidden - You do not have permission to access this resource',
      '404': 'Page Not Found - The requested page does not exist',
      'default': 'An unexpected error occurred'
    };
  }

  $onInit() {
    this.status = this.$routeParams.status || 'default';
    this.errorMessage = this.errorMessages[this.status] || this.errorMessages.default;
  }

  goBack() {
    this.$location.path('/');
  }
}