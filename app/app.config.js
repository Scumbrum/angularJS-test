import { userDetailsResolver } from './pages/user-details/user-details.resolver';

export function appConfig($routeProvider) {
    $routeProvider
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
}

appConfig.$inject = ['$routeProvider']; 