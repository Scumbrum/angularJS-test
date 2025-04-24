import angular from 'angular';
import 'angular-route';

// Import templates module
import './app.templates';

// Import components module
import componentsModule from './components/components.module';

// Import user list module
import userListModule from './pages/user-list/user-list.module';
import userDetailsModule from './pages/user-details/user-details.module';
import ErrorModule from './pages/error/error.module';
import ServiceModule from './services/services.module'
import { userDetailsResolver } from './pages/user-details/user-details.resolver';

// Define the Angular module
angular.module('myApp', ['ngRoute', 'templates', componentsModule, userListModule, userDetailsModule, ErrorModule, ServiceModule])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/test', {
                template: '<home-component></home-component>'
            })
            .when('/', {
                template: '<user-list-component></user-list-component>'
            })
            .when('/error/:status', {
                template: '<error-page></error-page>'
            })
            .when('/:id', {
                template: `<user-list-component>
                    <transclude-slot>
                    <user-details-component></user-details-component>
                    </transclude-slot>
                </user-list-component>`,
                resolve: {
                    resolvedUser: userDetailsResolver
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);