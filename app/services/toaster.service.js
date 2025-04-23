export default class ToasterService {
    show(message, type = 'success') {
        const toasterElement = angular.element(document.querySelector('toaster'));
        const toasterController = toasterElement.controller('toaster');

        toasterController.show(message, type);
    }

    success(message) {
        return this.show(message, 'success');
    }

    error(message) {
        return this.show(message, 'error');
    }
} 