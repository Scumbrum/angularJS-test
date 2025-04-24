export default class ErrorController {
  constructor($routeParams, $location) {
    this.$routeParams = $routeParams;
    this.$location= $location;
    this.errorMessages = {
      '400': 'Bad Request - The server cannot process the request due to client error',
      '401': 'Unauthorized - Authentication is required to access this resource',
      '403': 'Forbidden - You do not have permission to access this resource',
      '404': 'Page Not Found - The requested page does not exist',
      '500': 'Internal Server Error - Something went wrong on our end',
      '502': 'Bad Gateway - The server received an invalid response',
      '503': 'Service Unavailable - The server is temporarily unable to handle the request',
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