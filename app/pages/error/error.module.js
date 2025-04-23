import angular from 'angular';
import { ErrorComponent } from './error.component';

const ErrorModule = angular
  .module('app.pages.error', [])
  .component('errorPage', ErrorComponent)
  .name;

export default ErrorModule; 