/// <reference path="../references.ts" />
var appFramework;
(function (appFramework) {
    var FramworkAppController = (function () {
        function FramworkAppController($scope, $mdSidenav) {
            this.$scope = $scope;
            this.$mdSidenav = $mdSidenav;
        }
        FramworkAppController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        FramworkAppController.$inject = ['$scope',
            '$mdSidenav',];
        return FramworkAppController;
    }());
    appFramework.FramworkAppController = FramworkAppController;
})(appFramework || (appFramework = {}));
//# sourceMappingURL=framework-app-controller.js.map