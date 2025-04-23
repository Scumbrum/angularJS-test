export default class InputController {
    constructor() {
        this.showPassword = false;
    }

    $onInit() {
        // Set default type if not provided
        this.type = this.type || 'text';
        
        // Generate unique ID for input
        this.inputId = `input-${this.name}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Set required state
        this.isRequired = this.required || false;
    }

    togglePasswordVisibility() {
        if (this.type === 'password') {
            this.showPassword = !this.showPassword;
        }
    }

    getInputType() {
        if (this.type === 'password' && this.showPassword) {
            return 'text';
        }
        return this.type;
    }

    hasError() {
        return this.error && this.error.length > 0;
    }
} 