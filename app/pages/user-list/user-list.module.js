import angular from 'angular';
import UserListComponent from './user-list.component';

// Define the user list module
const userListModule = angular.module('userList', [])
    .component('userListComponent', UserListComponent);

export default userListModule.name; 