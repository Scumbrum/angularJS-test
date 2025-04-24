import UserListController from "../user-list/user-list.controller";

export default class UserDetailsController {
    constructor(userService, toasterService, $route, $location) {
        'ngInject';
        this.userService = userService;
        this.toasterService = toasterService;
        this.$route = $route;
        this.$location = $location;

        this.typeOptions = ['Admin', 'Driver'];
        this.isEditMode = false;
    }

    $onInit() {
        this.initializeForm();
    }

    initializeForm() {
        // Get resolved data
        const resolvedUser = this.$route.current.locals.resolvedUser;

        this.isEditMode = !!resolvedUser;

        this.editedUser = resolvedUser ? {
            ...resolvedUser,
            password: '',
            repeatPassword: ''
        } : {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            type: ''
        };

        this.errors = {};
        this.validationPatterns = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        };
    }

    validateForm() {
        this.errors = {};

        // Username validation
        if (!this.editedUser.username) {
            this.errors.username = 'Username is required';
        }

        // First name validation
        if (!this.editedUser.firstName) {
            this.errors.first_name = 'First name is required';
        }

        // Last name validation
        if (!this.editedUser.lastName) {
            this.errors.last_name = 'Last name is required';
        }

        // Email validation
        if (!this.editedUser.email) {
            this.errors.email = 'Email is required';
        } else if (!this.validationPatterns.email.test(this.editedUser.email)) {
            this.errors.email = 'Please enter a valid email address';
        }

       
            if (!this.editedUser.password) {
                this.errors.password = 'Password is required';
            } else if (!this.validationPatterns.password.test(this.editedUser.password)) {
                this.errors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
            }

            if (!this.editedUser.repeatPassword) {
                this.errors.repeatPassword = 'Repeat password is required';
            } else if (this.editedUser.password !== this.editedUser.repeatPassword) {
                this.errors.repeatPassword = 'Password not matched';
            }
        

        // User type validation
        if (!this.editedUser.type) {
            this.errors.type = 'User type is required';
        } else if (!this.typeOptions.includes(this.editedUser.type)) {
            this.errors.type = 'Invalid user type';
        }

        return Object.keys(this.errors).length === 0;
    }

    handleServerErrors(error) {
        if (error.message.includes('Username already exists')) {
            this.errors.username = 'This username is already taken';
        } else if (error.message.includes('Email already exists')) {
            this.errors.email = 'This email is already registered';
        } else if (error.message.includes('User not found')) {
            this.$location.path('/error/404');
        } else if (error.message.includes('Invalid user password')) {
            this.$location.path('/error/403');
        } else {
            this.toasterService.error(error.message);
        }
    }

    listenInput(field) {
        this.errors[field] = '';
    }

    saveChanges() {
        if (!this.validateForm()) {
            this.toasterService.error('Please fix the errors in the form');
            return;
        }

        const savePromise = this.isEditMode ? 
            this.userService.updateUser(this.editedUser.id, this.editedUser) :
            this.userService.createUser(this.editedUser);

        savePromise
            .then(() => {
                this.toasterService.success(
                    this.isEditMode ? 'User updated successfully' : 'User created successfully'
                );
                this.goToList();
            })
            .catch(error => {
                this.handleServerErrors(error);
            });
    }

    deleteUser() {
        this.userService.deleteUser(this.editedUser.id)
        .then(() => {
            this.toasterService.success(
                'User deleted successfully'
            );
            this.goToList();
        })
        .catch(error => {
            this.handleServerErrors(error);
        });
    
    }

    goToList() {
        this.$location.path('/');
    }
} 