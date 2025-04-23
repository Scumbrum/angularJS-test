import DropdownController from "./dropdown.controller";

export default {
    bindings: {
        options: '<',
        selected: '=',
        label: '@',
        name: '@',
        required: '<',
    },
    templateUrl: '/components/dropdown/dropdown.component.html',
    controller: DropdownController
}; 