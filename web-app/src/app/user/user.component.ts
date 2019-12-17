import { AppState } from './../app-state.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserMode } from './user-mode.model';
import { LoadUserAction, DeleteUserAction, LoadCreateUserAction } from './store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  loading$: boolean;
  error$: Error;
  view: UserMode;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.view = new UserMode();
    this.store.select(store => store.user.list).subscribe(users => this.users = users);
    this.store.select(store => store.user.loading).subscribe(loading => this.loading$ = loading);
    this.store.select(store => store.user.error).subscribe(error => this.error$ = error);

    this.store.dispatch(new LoadUserAction());
  }

  addNewUser(): void {
    this.view.mode = 'create';
    this.view.userInfo = new User();
    this.view.submitted = false;
    this.store.dispatch(new LoadCreateUserAction(this.view));
  }

  updateUser(user: User): void {
    this.view.mode = 'edit';
    this.view.userInfo = user;
    this.view.submitted = false;
    this.store.dispatch(new LoadCreateUserAction(this.view));
  }

  deleteUser(id: number): void {
    this.store.dispatch(new DeleteUserAction(id));
  }
}
