/// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var menu;
    (function (menu) {
        var MenuDirective = (function () {
            function MenuDirective() {
                this.controllerAs = "menuVm";
                this.controller = menu.MenuController;
                this.restrict = 'EA';
                this.templateUrl = '/framework-template/framework-menu/framework-menu.html';
                this.transclude = true;
                this.scope = {};
            }
            MenuDirective.factory = function () {
                var directive = function () { return new MenuDirective(); };
                //directive.$inject = [''];
                return directive;
            };
            return MenuDirective;
        }());
        angular.module('appFramework.menu').directive('xxxMenu', MenuDirective.factory());
    })(menu = appFramework.menu || (appFramework.menu = {}));
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-menu.js.map