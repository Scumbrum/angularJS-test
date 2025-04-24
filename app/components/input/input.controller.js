export default class InputController {
    constructor() {
    }

    $onInit() {
        this.type = this.type || 'text';

        this.inputId = `input-${this.name}-${Math.random().toString(36).substr(2, 9)}`;

        this.isRequired = this.required || false;
    }

    getInputType() {
        if (this.type === 'password' && this.showPassword) {
            return 'text';
        }
        return this.type;
    }
}
