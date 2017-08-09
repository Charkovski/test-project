//// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var menuSection;
    (function (menuSection) {
        var MenuSectionController = (function () {
            function MenuSectionController($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.section = this.$scope.section;
            }
            MenuSectionController.prototype.getActiveElement = function () {
                return this.activeElement;
            };
            ;
            MenuSectionController.prototype.setActiveElement = function (el) {
                this.activeElement = el;
            };
            ;
            MenuSectionController.prototype.setRoute = function (route) {
                this.$rootScope.$broadcast('menu-item-selected-event', { route: route });
            };
            ;
            MenuSectionController.$inject = [
                '$scope',
                '$rootScope'
            ];
            return MenuSectionController;
        }());
        menuSection.MenuSectionController = MenuSectionController;
    })(menuSection = appFramework.menuSection || (appFramework.menuSection = {}));
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-menu-section-controller.js.map