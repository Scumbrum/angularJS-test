import InputController from './input.controller';

export default {
    bindings: {
        type: '@',
        name: '@',
        label: '@',
        model: '=',
        change: '&',
        required: '<',
        error: '<',
        placeholder: '@',
        prefix: '@',
    },
    templateUrl: '/components/input/input.component.html',
    controller: InputController
};
