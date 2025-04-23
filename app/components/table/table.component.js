import TableController from './table.controller';

// Table Component
export default {
    bindings: {
        data: '<',
        columns: '<'
    },
    templateUrl: '/components/table/table.component.html',
    controller: TableController
}; 