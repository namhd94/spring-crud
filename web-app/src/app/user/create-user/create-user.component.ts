import { AppState } from './../../app-state.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/event-bus.service';
import { UserMode } from '../user-mode.model';
import { CreateUserAction, LoadUserAction, EditUserAction } from '../store/actions/user.actions';

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
    private eventBusService: EventBusService,
    private store: Store<AppState>
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
    this.store.dispatch(new CreateUserAction(this.view.userInfo));
  }

  editUser() {
    this.view.submitted = true;
    this.store.dispatch(new EditUserAction(this.view.userInfo));
  }

  gotoList() {
    this.router.navigate(['/rest/user']);
  }

}
