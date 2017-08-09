/// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var FramworkAppDirective = (function () {
        function FramworkAppDirective() {
            this.controller = appFramework.FramworkAppController;
            this.restrict = 'EA';
            this.templateUrl = '/framework-template/framework-app/framework-app.html';
            this.transclude = true;
            this.scope = {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            };
        }
        FramworkAppDirective.factory = function () {
            var directive = function () { return new FramworkAppDirective(); };
            //directive.$inject = [''];
            return directive;
        };
        return FramworkAppDirective;
    }());
    angular.module('appFramework').directive('xxxApp', FramworkAppDirective.factory());
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-app.js.map