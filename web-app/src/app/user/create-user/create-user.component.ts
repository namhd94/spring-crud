import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService } from 'src/app/event-bus.service';
import { UserMode } from '../user-mode.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {

  view: UserMode;

  constructor(
    private userService: UserService,
    private router: Router,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.eventBusService.currentUserMode.subscribe(view => {
      if (!view.submitted) {
        this.view = view;
      } else {
        this.view = new UserMode();
      }
    });
  }

  onSubmit() {
    if (this.view.mode === 'create') {
      this.createNewUser();
    } else if (this.view.mode === 'edit') {
      this.editUser();
    }
  }

  createNewUser() {
    this.view.submitted = true;
    this.userService.createUser(this.view.userInfo).subscribe(data => {
      console.log(data);
      this.gotoList();
    }, error => {
      console.log(error);
    });
  }

  editUser() {
    this.view.submitted = true;
    this.userService.updateUser(this.view.userInfo.id, this.view.userInfo).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  gotoList() {
    this.router.navigate(['/rest/user']);
  }

}
