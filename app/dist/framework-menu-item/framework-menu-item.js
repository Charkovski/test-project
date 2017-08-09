/// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var menuItem;
    (function (menuItem) {
        var MenuItemDirective = (function () {
            function MenuItemDirective() {
                this.controllerAs = "itemVm";
                this.controller = menuItem.MenuItemController;
                this.restrict = 'EA';
                this.templateUrl = '/framework-template/framework-menu-item/framework-menu-item.html';
                this.transclude = true;
                this.scope = {
                    action: '='
                };
            }
            MenuItemDirective.factory = function () {
                var directive = function () { return new MenuItemDirective(); };
                //directive.$inject = [''];
                return directive;
            };
            return MenuItemDirective;
        }());
        angular.module('appFramework.menuItem').directive('xxxItem', MenuItemDirective.factory());
    })(menuItem = appFramework.menuItem || (appFramework.menuItem = {}));
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-menu-item.js.map