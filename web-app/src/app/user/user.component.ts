import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserMode } from './user-mode.model';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  view: UserMode;

  constructor(
    private userService: UserService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.view = new UserMode();
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => console.log(error));
  }

  addNewUser(): void {
    this.view.mode = 'create';
    this.view.userInfo = new User();
    this.view.submitted = false;
    this.eventBusService.chaneUserMode(this.view);
  }

  updateUser(user: User): void {
    this.view.mode = 'edit';
    this.view.userInfo = user;
    this.view.submitted = false;
    this.eventBusService.chaneUserMode(this.view);
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe(data => { }, error => console.log(error));
  }
}
