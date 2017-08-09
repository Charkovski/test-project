/// <reference path="../references.ts" />
module appFramework.menu {
    class MenuDirective implements ng.IDirective {

        constructor() {
        }
        public controllerAs:string="menuVm";
        public controller:IMenuController = MenuController;
        public restrict:string = 'EA';
        public templateUrl:string = '/framework-template/framework-menu/framework-menu.html';
        public transclude:boolean = true;
        scope:any = {

        };

        public static factory():ng.IDirectiveFactory {
            let directive:ng.IDirectiveFactory = () => new MenuDirective();
            //directive.$inject = [''];
            return directive;
        }

    }
    angular.module('appFramework.menu').directive('xxxMenu', MenuDirective.factory());
}