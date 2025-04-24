import angular from 'angular';
import UserListComponent from './user-list.component';

const userListModule = angular.module('userList', [])
    .component('userListComponent', UserListComponent);

export default userListModule.name;
