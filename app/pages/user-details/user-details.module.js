import angular from 'angular';
import userDetailsComponent from './user-details.component';

// Define the user details module
const userDetailsModule = angular.module('userDetails', ['ngRoute'])
    .component('userDetailsComponent', userDetailsComponent)

export default userDetailsModule.name; 