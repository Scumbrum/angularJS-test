import angular from 'angular';
import buttonComponent from './button/button.component';
import tableComponent from './table/table.component';
import inputComponent from './input/input.component';
import dropdownComponent from './dropdown/dropdown.component';
import { ToasterComponent } from './toaster/toaster.component';
import { errorDirective } from './error/error.directive';

// Define the components module
const componentsModule = angular.module('components', []);

// Register components
componentsModule
    .component('customButton', buttonComponent)
    .component('tableComponent', tableComponent)
    .component('customInput', inputComponent)
    .component('customDropdown', dropdownComponent)
    .component('toaster', ToasterComponent)
    .directive('appError', errorDirective);

export default componentsModule.name; 