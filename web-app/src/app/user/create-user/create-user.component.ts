import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from '../user.model';
import { UserMode } from '../user-mode.model';
import { Component, OnInit, Input, OnDestroy, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit, OnDestroy, OnChanges {

  @Input() view: UserMode;
  userInfo: User;
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnChanges(simple: SimpleChanges) {
    this.submitted = false;
    if (simple.view.currentValue.mode) {
      this.userInfo = this.view.userInfo;
    }
  }

  ngOnInit() {
    this.userInfo = new User();
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
    this.submitted = true;
    this.userService.createUser(this.userInfo).subscribe(data => {
      console.log(data);
      this.gotoList();
    }, error => {
      console.log(error);
    });
  }

  editUser() {
    this.submitted = true;
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
