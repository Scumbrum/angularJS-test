import UserListController from "../user-list/user-list.controller";
import { VALIDATION_PATTERNS, ERROR_MESSAGES, USER_TYPES } from '../../constants/validation.constants';

class UserDetailsController {
    constructor(userService, toasterService, $route, $location) {
        'ngInject';
        this.userService = userService;
        this.toasterService = toasterService;
        this.$route = $route;
        this.$location = $location;

        this.typeOptions = USER_TYPES;
        this.isEditMode = false;

        this.errors = {};
        this.validationPatterns = VALIDATION_PATTERNS;
    }

    $onInit() {
        this.initializeForm();
    }

    initializeForm() {
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
    }

    validateForm() {
        this.errors = {};

        if (!this.editedUser.username) {
            this.errors.username = ERROR_MESSAGES.REQUIRED_FIELDS.USERNAME;
        }

        if (!this.editedUser.firstName) {
            this.errors.first_name = ERROR_MESSAGES.REQUIRED_FIELDS.FIRST_NAME;
        }

        if (!this.editedUser.lastName) {
            this.errors.last_name = ERROR_MESSAGES.REQUIRED_FIELDS.LAST_NAME;
        }

        if (!this.editedUser.email) {
            this.errors.email = ERROR_MESSAGES.REQUIRED_FIELDS.EMAIL;
        } else if (!this.validationPatterns.EMAIL.test(this.editedUser.email)) {
            this.errors.email = ERROR_MESSAGES.VALIDATION.EMAIL;
        }

        if (!this.editedUser.password) {
            this.errors.password = ERROR_MESSAGES.REQUIRED_FIELDS.PASSWORD;
        } else if (!this.validationPatterns.PASSWORD.test(this.editedUser.password)) {
            this.errors.password = ERROR_MESSAGES.VALIDATION.PASSWORD;
        }

        if (!this.editedUser.repeatPassword) {
            this.errors.repeatPassword = ERROR_MESSAGES.REQUIRED_FIELDS.REPEAT_PASSWORD;
        } else if (this.editedUser.password !== this.editedUser.repeatPassword) {
            this.errors.repeatPassword = ERROR_MESSAGES.VALIDATION.PASSWORD_MATCH;
        }

        if (!this.editedUser.type) {
            this.errors.type = ERROR_MESSAGES.REQUIRED_FIELDS.TYPE;
        } else if (!this.typeOptions.includes(this.editedUser.type)) {
            this.errors.type = ERROR_MESSAGES.VALIDATION.TYPE;
        }

        return Object.keys(this.errors).length === 0;
    }

    handleServerErrors(error) {
        if (error.message.includes(ERROR_MESSAGES.SERVER.USERNAME_EXISTS)) {
            this.errors.username = ERROR_MESSAGES.SERVER.USERNAME_EXISTS;
        } else if (error.message.includes(ERROR_MESSAGES.SERVER.EMAIL_EXISTS)) {
            this.errors.email = ERROR_MESSAGES.SERVER.EMAIL_EXISTS;
        } else if (error.message.includes(ERROR_MESSAGES.SERVER.USER_NOT_FOUND)) {
            this.$location.path('/error/404');
        } else if (error.message.includes(ERROR_MESSAGES.SERVER.INVALID_PASSWORD)) {
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
            this.toasterService.error(ERROR_MESSAGES.FORM.FIX_ERRORS);
            return;
        }

        const savePromise = this.isEditMode ? 
            this.userService.updateUser(this.editedUser.id, this.editedUser) :
            this.userService.createUser(this.editedUser);

        savePromise
            .then(() => {
                this.toasterService.success(
                    this.isEditMode ? ERROR_MESSAGES.FORM.USER_UPDATED : ERROR_MESSAGES.FORM.USER_CREATED
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
                this.toasterService.success(ERROR_MESSAGES.FORM.USER_DELETED);
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

export default UserDetailsController; 
