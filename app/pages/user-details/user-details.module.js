import angular from 'angular';
import userDetailsComponent from './user-details.component';

const userDetailsModule = angular.module('userDetails', ['ngRoute'])
    .component('userDetailsComponent', userDetailsComponent);

export default userDetailsModule.name;
