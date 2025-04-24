export function userDetailsResolver($route, userService, $location) {
    'ngInject';

    const userId = $route.current.params.id;

    if (!userId || userId === 'create') {
        return null;
    }

    return userService.getUserById(parseInt(userId))
        .catch(error => {
            $location.path('/error/404');
            return null;
        });
}
