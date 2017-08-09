//// <reference path="../references.ts" />
module appFramework.menuItem {

    export interface IMenuItemScope extends ng.IScope {
        action:any;
    }

    export interface IMenuItemController {
    }

    export class MenuItemController implements IMenuItemController {
        static $inject =
            [
                '$scope',
                '$rootScope'
            ];
        constructor(private $scope: IMenuItemScope ,
                    private $rootScope: ng.IRootScopeService) {
            debugger;
            this.action = this.$scope.action;
        }

        action: any;
    }
}