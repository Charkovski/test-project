/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.tabIndex = 0;
            this.searchText = '';
            this.users = [];
            this.selected = null;
            this.newNote = new ContactManagerApp.Note('', null);
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
                        }]
                },
                content: {
                    lists: [{
                            name: 'List 1',
                            menu: {
                                name: 'Menu 1',
                                icon: 'settings',
                                width: '4',
                                actions: [{
                                        name: 'Action 1',
                                        message: 'Action 1',
                                        completed: true,
                                        error: true
                                    }]
                            },
                            items: [{
                                    name: 'Item 1',
                                    description: 'Description 1',
                                    link: 'Item 1'
                                }, {
                                    name: 'Item 2',
                                    description: 'Description 2',
                                    link: 'Item 2'
                                }, {
                                    name: 'Item 3',
                                    description: 'Description 3',
                                    link: 'Item 3'
                                }]
                        }]
                }
            };
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                self.userService.selectedUser = self.selected;
                console.log(self.users);
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            this.userService.selectedUser = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All notes will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.selected.notes = [];
                self.openToast('Cleared notes');
            });
        };
        MainController.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainController.prototype.addNote = function () {
            this.selected.notes.push(this.newNote);
            // reset the form
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            this.newNote = new ContactManagerApp.Note('', null);
            this.openToast("Note added");
        };
        MainController.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note was removed");
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainController.$inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'
        ];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map