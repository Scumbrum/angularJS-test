export default class ButtonController {
    constructor() {
        this.buttonTypes = {
            primary: 'button--primary',
            secondary: 'button--secondary'
        };

        this.buttonSizes = {
            small: 'button--small',
            medium: 'button--medium',
            large: 'button--large'
        };
    }

    $onInit() {
        // Set default type if not provided
        this.type = this.type || 'primary';
        this.buttonClass = this.buttonTypes[this.type];
        
        // Set size class
        this.sizeClass = this.buttonSizes[this.size || 'medium'];
        
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