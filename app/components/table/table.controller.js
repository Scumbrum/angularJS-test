export default class TableController {
    constructor() {
        this.defaultColumns = [
            { key: 'username', header: 'USERNAME' },
            { key: 'firstName', header: 'FIRST NAME' },
            { key: 'lastName', header: 'LAST NAME' },
            { key: 'email', header: 'EMAIL' },
            { key: 'type', header: 'TYPE' }
        ];
    }

    $onInit() {
        if (!this.columns) {
            this.columns = this.defaultColumns;
        }
    }

    click() {
        console.log('here')
    }
}
