import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from '../user.model';
import { UserMode } from '../user-mode.model';
import { Component, OnInit, Input, OnDestroy, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit, OnDestroy, DoCheck {

  @Input() view: UserMode;
  userInfo: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userInfo = new User();
  }

  ngDoCheck() {
    if (this.view.mode) {
      this.userInfo = this.view.userInfo;
    }
  }

  ngOnDestroy() {
    if (Object.keys(this.userInfo).length !== 0) {
      this.userInfo = null;
    }
  }

  onSubmit() {
    if (this.view.mode === 'create') {
      this.createNewUser();
    } else if (this.view.mode === 'edit') {
      this.editUser();
    }
  }

  createNewUser() {
    this.userService.createUser(this.userInfo).subscribe(data => {
      console.log(data);
      this.gotoList();
    }, error => {
      console.log(error);
    });
  }

  editUser() {
    this.userService.updateUser(this.userInfo.id, this.userInfo).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  gotoList() {
    this.router.navigate(['/rest/user']);
  }

}
