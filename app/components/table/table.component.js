import TableController from './table.controller';

export default {
    bindings: {
        data: '<',
        columns: '<',
        itemClicked: '&'
    },
    templateUrl: '/components/table/table.component.html',
    controller: TableController
};
