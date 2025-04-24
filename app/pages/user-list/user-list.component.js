import UserListController from "./user-list.controller";

export default {
    templateUrl: '/pages/user-list/user-list.component.html',
    transclude: {
        'slot': '?transcludeSlot'
    },
    controller: UserListController
}; 