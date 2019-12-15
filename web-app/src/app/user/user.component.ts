import { AppState } from './../app-state.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserMode } from './user-mode.model';
import { EventBusService } from '../event-bus.service';
import { Observable } from 'rxjs';
import { UserActionTypes, LoadUserAction } from './store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  view: UserMode;

  constructor(
    private userService: UserService,
    private eventBusService: EventBusService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.view = new UserMode();
    this.users = this.store.select(store => store.user.list);
    this.loading$ = this.store.select(store => store.user.loading);
    this.error$ = this.store.select(store => store.user.error);

    this.store.dispatch(new LoadUserAction());
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

  deleteUser(id: number): void {
    // this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(id).subscribe(data => { }, error => console.log(error));
  }
}
