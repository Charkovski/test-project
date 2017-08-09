//// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var menu;
    (function (menu) {
        var MenuController = (function () {
            function MenuController($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.showMenu = true;
                this.data = {
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
                this.$scope.$on('menu-show', function (evt, data) {
                    this.$scope.showMenu = data.show;
                });
            }
            MenuController.prototype.getActiveElement = function () {
                return this.activeElement;
            };
            ;
            MenuController.prototype.setActiveElement = function (el) {
                this.activeElement = el;
            };
            ;
            MenuController.prototype.setRoute = function (route) {
                this.$rootScope.$broadcast('menu-item-selected-event', { route: route });
            };
            ;
            MenuController.$inject = [
                '$scope',
                '$rootScope'
            ];
            return MenuController;
        }());
        menu.MenuController = MenuController;
    })(menu = appFramework.menu || (appFramework.menu = {}));
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-menu-controller.js.map