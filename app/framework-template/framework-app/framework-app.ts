/// <reference path="../references.ts" />
module appFramework {
    class FramworkAppDirective implements ng.IDirective {

        constructor() {
        }

        public controller:IFramworkAppController = FramworkAppController;
        public restrict:string = 'EA';
        public templateUrl:string = '/framework-template/framework-app/framework-app.html';
        public transclude:boolean = true;
        scope:any = {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        };

        public static factory():ng.IDirectiveFactory {
            let directive:ng.IDirectiveFactory = () => new FramworkAppDirective();
            //directive.$inject = [''];
            return directive;
        }

    }
    angular.module('appFramework').directive('xxxApp', FramworkAppDirective.factory());
}