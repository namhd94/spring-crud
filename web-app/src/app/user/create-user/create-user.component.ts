import { AppState } from './../../app-state.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { UserMode } from '../user-mode.model';
import { CreateUserAction, EditUserAction } from '../store/actions/user.actions';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {

  view: UserMode;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(store => store.createUser.list).subscribe(view => {
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

}
