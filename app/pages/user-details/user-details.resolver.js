export function userDetailsResolver(userService, $route, $location) {
    'ngInject';
    
    const userId = $route.current.params.id;
    
    // If no ID, we're creating a new user
    if (!userId || userId === 'create') {
        return null;
    }

    // Otherwise fetch the user data
    return userService.getUserById(parseInt(userId))
        .catch(error => {
            $location.path('/error/404');
            return null;
        });
} 
