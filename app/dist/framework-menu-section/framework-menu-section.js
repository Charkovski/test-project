/// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var menuSection;
    (function (menuSection) {
        var MenuSectionDirective = (function () {
            function MenuSectionDirective() {
                this.controllerAs = "sectionVm";
                this.controller = menuSection.MenuSectionController;
                this.restrict = 'EA';
                this.templateUrl = '/framework-template/framework-menu-section/framework-menu-section.html';
                this.transclude = true;
                this.scope = {
                    section: '='
                };
            }
            MenuSectionDirective.factory = function () {
                var directive = function () { return new MenuSectionDirective(); };
                //directive.$inject = [''];
                return directive;
            };
            return MenuSectionDirective;
        }());
        angular.module('appFramework.menuSection').directive('xxxSection', MenuSectionDirective.factory());
    })(menuSection = appFramework.menuSection || (appFramework.menuSection = {}));
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-menu-section.js.map