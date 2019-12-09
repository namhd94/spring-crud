import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from '../user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService } from 'src/app/event-bus.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  mode: string;
  userInfo: User;
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.eventBusService.currentUserMode.subscribe(view => {
      this.mode = view.mode;
      this.userInfo = view.userInfo;
      this.submitted = false;
    });
  }

  ngOnDestroy() {
    if (Object.keys(this.userInfo).length !== 0) {
      this.userInfo = null;
    }
  }

  onSubmit() {
    if (this.mode === 'create') {
      this.createNewUser();
    } else if (this.mode === 'edit') {
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
