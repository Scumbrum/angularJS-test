import ButtonController from './button.controller';

export default {
    bindings: {
        type: '@',     
        size: '@',      // primary, secondary
        disabled: '<',      // boolean
        onButtonClick: '&'  // click handler
    },
    transclude: true,      // allows content to be injected
    templateUrl: '/components/button/button.component.html',
    controller: ButtonController
}; 