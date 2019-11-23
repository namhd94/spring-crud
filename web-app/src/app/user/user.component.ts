import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model'; 
import { UserMode } from './user-mode.model'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  view: UserMode;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.view = new UserMode();
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => console.log(error));
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(data => {
      this.view.userInfo = data;
    }, error => console.log(error));
  }

  addNewUser(): void {
    this.view.mode = 'create';
  }

  updateUser(id: number): void {
    this.view.mode = 'edit';
    this.getUser(id);
  }

}
