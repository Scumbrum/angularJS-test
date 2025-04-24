import ButtonController from './button.controller';

export default {
    bindings: {
        type: '@',
        size: '@',
        disabled: '<',
        onButtonClick: '&'
    },
    transclude: true,
    templateUrl: '/components/button/button.component.html',
    controller: ButtonController
};
