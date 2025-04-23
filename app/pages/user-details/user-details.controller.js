import UserListController from "../user-list/user-list.controller";
import angular from 'angular';


export default class UserDetailsController extends UserListController {
    constructor(userService, toasterService, $scope) {
        'ngInject';
        super();
        this.userService = userService;
        this.toasterService = toasterService;
        this.$scope = $scope;

        this.typeOptions = ['Admin', 'Driver'];
        
        this.editedUser = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            user_type: ''
        };

        this.errors = {};
        this.validationPatterns = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        };
    }

    validateForm() {
        this.errors = {};
        let isValid = true;

        // Username validation
        if (!this.editedUser.username) {
            this.errors.username = 'Username is required';
            isValid = false;
        }

        // First name validation
        if (!this.editedUser.first_name) {
            this.errors.first_name = 'First name is required';
            isValid = false;
        }

        // Last name validation
        if (!this.editedUser.last_name) {
            this.errors.last_name = 'Last name is required';
            isValid = false;
        }

        // Email validation
        if (!this.editedUser.email) {
            this.errors.email = 'Email is required';
            isValid = false;
        } else if (!this.validationPatterns.email.test(this.editedUser.email)) {
            this.errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Password validation
        if (!this.editedUser.password) {
            this.errors.password = 'Password is required';
            isValid = false;
        } else if (!this.validationPatterns.password.test(this.editedUser.password)) {
            this.errors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
            isValid = false;
        }

        // User type validation
        if (!this.editedUser.user_type) {
            this.errors.user_type = 'User type is required';
            isValid = false;
        } else if (!this.typeOptions.includes(this.editedUser.user_type)) {
            this.errors.user_type = 'Invalid user type';
            isValid = false;
        }

        return isValid;
    }

    handleServerErrors(error) {
        if (error.message.includes('Username already exists')) {
            this.errors.username = 'This username is already taken';
        } else if (error.message.includes('Email already exists')) {
            this.errors.email = 'This email is already registered';
        } else {
            this.toasterService.error(error.message);
        }
        this.$scope.$apply();
    }

    saveChanges() {
        if (!this.validateForm()) {
            this.toasterService.error('Please fix the errors in the form');
            return;
        }

        this.userService.createUser(this.editedUser)
            .then(() => {
                this.toasterService.success('User created successfully');
                this.goToList();
            })
            .catch(error => {
                this.handleServerErrors(error);
            });
    }

    goToList() {
        // Navigation logic here
    }
} 