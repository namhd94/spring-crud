import { AppState } from './../../../app-state.model';
import { Store } from '@ngrx/store';
import { UserService } from './../../user.service';
import * as UserAction from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {

    @Effect() loadUsers = this.actions$
        .pipe(
            ofType<UserAction.LoadUserAction>(UserAction.UserActionTypes.LOAD_USER),
            mergeMap(
                () => this.userService.getUsers()
                    .pipe(
                        map(data => {
                            return new UserAction.LoadUserSuccessAction(data);
                        }),
                        catchError(error => of(new UserAction.LoadUserFailureAction(error)))
                    )
            )
        );

    @Effect() createUser = this.actions$
        .pipe(
            ofType<UserAction.CreateUserAction>(UserAction.UserActionTypes.CREATE_USER),
            mergeMap(
                (data) => this.userService.createUser(data.payload)
                    .pipe(
                        switchMap(() => [
                            new UserAction.CreateUserSuccessAction(data.payload),
                            new UserAction.LoadUserAction()
                        ]),
                        catchError(error => of(new UserAction.CreateUserFailureAction(error))),
                    )
            )
        );

    @Effect() editUser = this.actions$
        .pipe(
            ofType<UserAction.EditUserAction>(UserAction.UserActionTypes.EDIT_USER),
            mergeMap(
                (data) => this.userService.updateUser(data.payload)
                    .pipe(
                        switchMap(() => [
                            new UserAction.EditUserSuccessAction(data.payload),
                            new UserAction.LoadUserAction()
                        ]),
                        catchError(error => of(new UserAction.EditUserFailureAction(error))),
                    )
            )
        );

    @Effect() deleteUser = this.actions$
        .pipe(
            ofType<UserAction.DeleteUserAction>(UserAction.UserActionTypes.DELETE_USER),
            mergeMap(
                (data) => this.userService.deleteUser(data.payload)
                    .pipe(
                        map(() => {
                            return new UserAction.DeleteUserSuccessAction(data.payload);
                        }),
                        catchError(error => of(new UserAction.DeleteUserFailureAction(error)))
                    )
            )
        );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}