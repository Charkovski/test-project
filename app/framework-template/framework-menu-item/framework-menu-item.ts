/// <reference path="../references.ts" />
module appFramework.menuItem {
    class MenuItemDirective implements ng.IDirective {

        constructor() {
        }
        public controllerAs:string="itemVm";
        public controller:IMenuItemController = MenuItemController;
        public restrict:string = 'EA';
        public templateUrl:string = '/framework-template/framework-menu-item/framework-menu-item.html';
        public transclude:boolean = true;
        scope:any = {
            action:'='
        };

        public static factory():ng.IDirectiveFactory {
            let directive:ng.IDirectiveFactory = () => new MenuItemDirective();
            //directive.$inject = [''];
            return directive;
        }
    }
    angular.module('appFramework.menuItem').directive('xxxItem', MenuItemDirective.factory());
}