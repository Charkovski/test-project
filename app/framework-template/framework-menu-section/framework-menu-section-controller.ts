//// <reference path="../references.ts" />
module appFramework.menuSection {

    export interface IMenuSectionScope extends ng.IScope {
        section:any;
    }

    export interface IMenuSectionController {
        getActiveElement(): any;
        setActiveElement (el): any;
        setRoute(route) : void;
    }

    export class MenuSectionController implements IMenuSectionController {
        static $inject =
            [
                '$scope',
                '$rootScope'
            ];
        constructor(private $scope: IMenuSectionScope ,
                    private $rootScope: ng.IRootScopeService) {
            this.section = this.$scope.section;
        }

        activeElement:any;
        section: any;

        getActiveElement(): any {
            return this.activeElement;
        };

        setActiveElement (el): any {
            this.activeElement = el;
        };

        setRoute(route) : void {
            this.$rootScope.$broadcast('menu-item-selected-event',
                    { route: route });
        };
    }
}