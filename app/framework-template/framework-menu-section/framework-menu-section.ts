/// <reference path="../references.ts" />
module appFramework.menuSection {
    class MenuSectionDirective implements ng.IDirective {

        constructor() {
        }
        public controllerAs:string="sectionVm";
        public controller:IMenuSectionController = MenuSectionController;
        public restrict:string = 'EA';
        public templateUrl:string = '/framework-template/framework-menu-section/framework-menu-section.html';
        public transclude:boolean = true;
        scope:any = {
            section:'='
        };

        public static factory():ng.IDirectiveFactory {
            let directive:ng.IDirectiveFactory = () => new MenuSectionDirective();
            //directive.$inject = [''];
            return directive;
        }

    }
    angular.module('appFramework.menuSection').directive('xxxSection', MenuSectionDirective.factory());
}