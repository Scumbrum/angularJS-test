import InputController from './input.controller';

export default {
    bindings: {
        type: '@',          // text, password
        name: '@',          // input name
        label: '@',         // label text
        model: '=',         // ng-model binding
        required: '<',      // is required
        placeholder: '@',   // placeholder text
    },
    templateUrl: '/components/input/input.component.html',
    controller: InputController
}; 