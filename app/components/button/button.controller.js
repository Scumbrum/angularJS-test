export default class ButtonController {
    constructor() {
        this.buttonTypes = {
            primary: 'btn-primary',
            secondary: 'btn-secondary'
        };

        this.size = 'small'
    }

    $onInit() {
        // Set default type if not provided
        this.type = this.type || 'primary';
        this.buttonClass = this.buttonTypes[this.type];
        
        // Handle disabled state
        this.isDisabled = this.disabled || false;
    }

    onClick(event) {
        if (this.isDisabled) {
            event.preventDefault();
            return;
        }
        
        if (this.onButtonClick) {
            this.onButtonClick({ $event: event });
        }
    }
} 