import angular from 'angular';
import userDetailsComponent from './user-details.component';

// Define the user list module
const userDetailsModule = angular.module('userDetails', [])
    .component('userDetailsComponent', userDetailsComponent);

export default userDetailsModule.name; 