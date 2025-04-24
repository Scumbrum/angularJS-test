import TableController from './table.controller';

// Table Component
export default {
    bindings: {
        data: '<',
        columns: '<',
        itemClicked: '&'
    },
    templateUrl: '/components/table/table.component.html',
    controller: TableController
}; 