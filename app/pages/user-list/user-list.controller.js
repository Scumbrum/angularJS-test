// User List Controller
export default class UserListController {
    constructor() {
        // Initialize controller properties
        this.users = [
            { id: 1, username: 'mperry1992', firstName: 'Matthew', lastName: 'Perry', email: 'matthew@mail.com', type: 'Administrator' },
            { id: 2, username: 'jsmith', firstName: 'John', lastName: 'Smith', email: 'john@mail.com', type: 'User' },
            { id: 3, username: 'awhite', firstName: 'Alice', lastName: 'White', email: 'alice@mail.com', type: 'Editor' }
        ];

        // Initialize new user form
        this.newUser = this.getEmptyUserForm();

        // Table configuration
        this.columns = [
            { key: 'username', header: 'USERNAME' },
            { key: 'firstName', header: 'FIRST NAME' },
            { key: 'lastName', header: 'LAST NAME' },
            { key: 'email', header: 'EMAIL' },
            { key: 'type', header: 'TYPE' }
        ];
    }

    getEmptyUserForm() {
        return {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            type: 'User'
        };
    }

    addUser() {
        const newUser = {
            id: this.users.length + 1,
            username: this.newUser.username,
            firstName: this.newUser.firstName,
            lastName: this.newUser.lastName,
            email: this.newUser.email,
            type: this.newUser.type
        };

        this.users.push(newUser);
        this.newUser = this.getEmptyUserForm();
    }

    deleteUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    editUser(user) {
        this.editingUser = { ...user };
        this.isEditing = true;
    }

    updateUser() {
        const index = this.users.findIndex(user => user.id === this.editingUser.id);
        if (index !== -1) {
            this.users[index] = { ...this.editingUser };
        }
        this.cancelEdit();
    }

    cancelEdit() {
        this.editingUser = null;
        this.isEditing = false;
    }
} 