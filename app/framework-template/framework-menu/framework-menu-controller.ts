//// <reference path="../references.ts" />
module appFramework.menu {

    export interface IMenuScope extends ng.IScope {

    }

    export interface IMenuController {
        showMenu: boolean;
        activeElement:any;
        data: any;

        getActiveElement(): any;
        setActiveElement (el): any;
        setRoute(route) : void;
    }

    export class MenuController implements IMenuController {
        static $inject =
            [
                '$scope',
                '$rootScope'
            ];
        constructor(private $scope: ng.IScope ,
                    private $rootScope: ng.IRootScopeService) {

            this.$scope.$on('menu-show', function (evt, data) {
                this.$scope.showMenu = data.show;
            });
        }

        showMenu: boolean = true;
        activeElement:any;
        public data: any = {
            sidenav: {
                sections: [{
                    name: 'Section 1',
                    expand: true,
                    actions: [{
                        name: 'Action 1',
                        icon: 'settings',
                        link: 'Action 1'
                    }, {
                        name: 'Action 2',
                        icon: 'settings',
                        link: 'Action 2'
                    }]
                }, {
                    name: 'Section 2',
                    expand: false,
                    actions: [{
                        name: 'Action 3',
                        icon: 'settings',
                        link: 'Action 3'
                    }]
                }, {
                    name: 'Section 3',
                    expand: false,
                    actions: [{
                        name: 'Action 4',
                        icon: 'settings',
                        link: 'Action 4'
                    }, {
                        name: 'Action 5',
                        icon: 'settings',
                        link: 'Action 5'
                    }, {
                        name: 'Action 6',
                        icon: 'settings',
                        link: 'Action 6'
                    }]
                }],
                actions: [{
                    name: 'Action 100',
                    icon: 'settings',
                    link: 'Action 1'
                }, {
                    name: 'Action 200',
                    icon: 'settings',
                    link: 'Action 2'
                }]
            }
        };

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