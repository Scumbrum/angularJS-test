import angular from 'angular';
import UserService from './user.service';
import ToasterService from './toaster.service';

const servicesModule = angular.module('app.services', [])
    .service('userService', UserService)
    .service('toasterService', ToasterService);

export default servicesModule.name;
