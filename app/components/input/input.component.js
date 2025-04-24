import InputController from './input.controller';

export default {
    bindings: {
        type: '@',          // text, password
        name: '@',          // input name
        label: '@',         // label text
        model: '=', 
        change: '&',
        required: '<', 
        error: '<',     // is required
        placeholder: '@',   // placeholder text
    },
    templateUrl: '/components/input/input.component.html',
    controller: InputController
}; 