//// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var menuItem;
    (function (menuItem) {
        var MenuItemController = (function () {
            function MenuItemController($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                debugger;
                this.action = this.$scope.action;
            }
            MenuItemController.$inject = [
                '$scope',
                '$rootScope'
            ];
            return MenuItemController;
        }());
        menuItem.MenuItemController = MenuItemController;
    })(menuItem = appFramework.menuItem || (appFramework.menuItem = {}));
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-menu-item-controller.js.map