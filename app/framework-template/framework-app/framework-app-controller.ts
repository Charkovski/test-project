/// <reference path="../references.ts" />
module appFramework {

    export interface IFramworkAppScope extends ng.IScope {

    }
    
    export interface IFramworkAppController {
        toggleSideNav():void;
    }

    export class FramworkAppController implements IFramworkAppController {
        static $inject =
            ['$scope',
            '$mdSidenav', ];
        constructor(private $scope:IFramworkAppScope,
                    private $mdSidenav: angular.material.ISidenavService) {
        }

        toggleSideNav() : void {
            this.$mdSidenav('left').toggle();
        }
    }
}