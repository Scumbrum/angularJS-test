// User List Controller
export default class UserListController {
    constructor(userService, toasterService, $location) {
        'ngInject';
        this.userService = userService;
        this.toasterService = toasterService;
        this.$location = $location;

        // Initialize controller properties
        this.users = [];
        this.isLoading = false;

        // Table configuration
        this.columns = [
            { key: 'username', header: 'USERNAME' },
            { key: 'firstName', header: 'FIRST NAME' },
            { key: 'lastName', header: 'LAST NAME' },
            { key: 'email', header: 'EMAIL' },
            { key: 'type', header: 'TYPE' }
        ];

        // Load users when controller initializes
        this.loadUsers();
    }

    selectItem(row) {
        console.log(row)
        this.$location.path(row.id)
    }

    loadUsers() {
        this.isLoading = true;
        this.error = null;

        this.userService.getUsers()
            .then(users => {
                this.users = users;
            })
            .catch(error => {
                this.toasterService.error(this.error);
                console.error('Error loading users:', error);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    createUser() {
        this.$location.path('/create');
    }
} 