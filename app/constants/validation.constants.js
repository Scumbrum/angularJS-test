export const VALIDATION_PATTERNS = {
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

export const ERROR_MESSAGES = {
    REQUIRED_FIELDS: {
        USERNAME: 'Username is required',
        FIRST_NAME: 'First name is required',
        LAST_NAME: 'Last name is required',
        EMAIL: 'Email is required',
        PASSWORD: 'Password is required',
        REPEAT_PASSWORD: 'Repeat password is required',
        TYPE: 'User type is required'
    },
    VALIDATION: {
        EMAIL: 'Please enter a valid email address',
        PASSWORD: 'Password must be at least 8 characters long and contain at least one letter and one number',
        PASSWORD_MATCH: 'Password not matched',
        TYPE: 'Invalid user type'
    },
    SERVER: {
        USERNAME_EXISTS: 'This username is already taken',
        EMAIL_EXISTS: 'This email is already registered',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Invalid user password',
        MISSING_FIELDS: 'Missing required fields: ',
        USERNAME_EMAIL_EXISTS: 'Username or email already exists'
    },
    FORM: {
        FIX_ERRORS: 'Please fix the errors in the form',
        USER_CREATED: 'User created successfully',
        USER_UPDATED: 'User updated successfully',
        USER_DELETED: 'User deleted successfully'
    }
};

export const USER_TYPES = ['Admin', 'Driver'];