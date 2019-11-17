import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  newUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    }, error => console.log(error));
  }

  addNewUser(): void {
    this.newUser = new User();
  }

}
