export default class UserService {
    constructor($q, $timeout) {
        'ngInject';
        this.$q = $q;
        this.$timeout = $timeout;

        // Simulated database
        this.users = [
            { 
                id: 1, 
                username: 'john.doe',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                type: 'Admin',
                password: 'hashedPassword123'
            },
            { 
                id: 2, 
                username: 'jane.smith',
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                type: 'Driver',
                password: 'hashedPassword456'
            }
        ];
    }

    // Simulate API delay
    _delay(data, delay = 500) {
        return this.$timeout(() => data, delay);
    }

    // Get all users
    getUsers() {
        return this.$q((resolve) => {
            // Return users without passwords
            const sanitizedUsers = this.users.map(user => {
                const { password, ...sanitizedUser } = user;
                return sanitizedUser;
            });
            this._delay(sanitizedUsers).then(resolve);
        });
    }

    // Get user by ID
    getUserById(id) {
        return this.$q((resolve, reject) => {
            const user = this.users.find(u => u.id === id);
            if (user) {
                const { password, ...sanitizedUser } = user;
                this._delay(sanitizedUser).then(resolve);
            } else {
                this._delay(null).then(() => {
                    reject(new Error('User not found'));
                });
            }
        });
    }

    // Create new user
    createUser(userData) {
        return this.$q((resolve, reject) => {
            // Validate required fields
            const requiredFields = ['username', 'firstName', 'lastName', 'email', 'type', 'password'];
            const missingFields = requiredFields.filter(field => !userData[field]);
            
            if (missingFields.length > 0) {
                this._delay(null).then(() => {
                    reject(new Error(`Missing required fields: ${missingFields.join(', ')}`));
                });
                return;
            }

            // Check if username or email already exists
            const userExists = this.users.some(u => 
                u.username === userData.username || u.email === userData.email
            );

            if (userExists) {
                this._delay(null).then(() => {
                    reject(new Error('Username or email already exists'));
                });
                return;
            }

            // Create new user
            const newUser = {
                ...userData,
                id: this.users.length + 1
            };

            this.users.push(newUser);
            const { password, ...sanitizedUser } = newUser;
            this._delay(sanitizedUser).then(resolve);
        });
    }

    // Update user
    updateUser(id, userData) {
        return this.$q((resolve, reject) => {
            const index = this.users.findIndex(u => u.id === id);
            
            if (index === -1) {
                this._delay(null).then(() => {
                    reject(new Error('User not found'));
                });
                return;
            }

            // Check if username or email is taken by another user
            const userExists = this.users.some(u => 
                u.id !== id && (u.username === userData.username || u.email === userData.email)
            );

            if (userExists) {
                this._delay(null).then(() => {
                    reject(new Error('Username or email already exists'));
                });
                return;
            }

            const isPasswordCorrent = this.users.some(u => u.id === userData.id && u.password === userData.password)

            if (!isPasswordCorrent) {
                this._delay(null).then(() => {
                    reject(new Error('Invalid user password'));
                });
                return;
            }

            // Update user
            this.users[index] = {
                ...this.users[index],
                ...userData,
                id // Ensure ID doesn't change
            };

            const { password, ...sanitizedUser } = this.users[index];
            this._delay(sanitizedUser).then(resolve);
        });
    }

    // Delete user
    deleteUser(id) {
        return this.$q((resolve, reject) => {
            const index = this.users.findIndex(u => u.id === id);
            
            if (index === -1) {
                this._delay(null).then(() => {
                    reject(new Error('User not found'));
                });
                return;
            }

            this.users.splice(index, 1);
            this._delay(true).then(resolve);
        });
    }
} 