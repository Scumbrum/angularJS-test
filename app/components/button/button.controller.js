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
        this.type = this.type || 'primary';
        this.buttonClass = this.buttonTypes[this.type];
        
        this.sizeClass = this.buttonSizes[this.size || 'medium'];
        
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