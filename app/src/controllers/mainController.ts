/// <reference path="../_all.ts" />

module ContactManagerApp {
  export class MainController {
    static $inject = [
      'userService', 
      '$mdSidenav', 
      '$mdToast', 
      '$mdDialog', 
      '$mdMedia',
      '$mdBottomSheet'];
    
    constructor(
      private userService: IUserService,
      private $mdSidenav: angular.material.ISidenavService,
      private $mdToast: angular.material.IToastService,
      private $mdDialog: angular.material.IDialogService,
      private $mdMedia: angular.material.IMedia,
      private $mdBottomSheet: angular.material.IBottomSheetService) {
      var self = this;
        
      this.userService
        .loadAllUsers()
        .then((users: User[]) => {
          self.users = users;
          self.selected = users[0];
          self.userService.selectedUser = self.selected;
          
          console.log(self.users);
        });
    }
    
    tabIndex: number = 0;
    searchText: string = '';
    users: User[] = [];
    selected: User = null;
    newNote: Note = new Note('', null);
    data: any = {
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
    }
    
    toggleSideNav() : void {
      this.$mdSidenav('left').toggle();
    }
    
    selectUser (user: User) : void {
      this.selected = user;
      this.userService.selectedUser = user;
      
      var sidenav = this.$mdSidenav('left');
      if (sidenav.isOpen()) {
        sidenav.close();
      }
      
      this.tabIndex = 0;
    }

    clearNotes($event) {
      var confirm = this.$mdDialog.confirm()
        .title('Are you sure you want to delete all notes?')
        .textContent('All notes will be deleted, you can\'t undo this action.')
        .targetEvent($event)
        .ok('Yes')
        .cancel('No');
        
      var self = this;
      this.$mdDialog.show(confirm).then(() => {
        self.selected.notes= [];
        self.openToast('Cleared notes');
      })
    }
    
    formScope: any;
    
    setFormScope(scope) {
      this.formScope = scope;
    }
    
    addNote() {
      this.selected.notes.push(this.newNote); 
      
      // reset the form
      this.formScope.noteForm.$setUntouched();
      this.formScope.noteForm.$setPristine();
       
      this.newNote = new Note('', null);
      this.openToast("Note added");
    }
    
    removeNote(note: Note): void {
      var foundIndex = this.selected.notes.indexOf(note);
      this.selected.notes.splice(foundIndex, 1);
      this.openToast("Note was removed");
    }
    
    openToast(message: string): void {
      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent(message)
          .position('top right')
          .hideDelay(3000)
      );
    }
  }
}