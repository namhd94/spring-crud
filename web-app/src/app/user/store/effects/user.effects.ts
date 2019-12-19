import { User } from './../../user.model';
import { UserService } from './../../user.service';
import * as UserAction from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {

    loadUsers$ = createEffect(() => this.actions$
        .pipe(
            ofType(UserAction.loadUsersAction),
            mergeMap(
                () => this.userService.getUsers()
                    .pipe(
                        map((users: User[]) => UserAction.loadUsersSuccessAction({ payload: users })),
                        catchError(error => of(UserAction.loadUsersFailureAction({ payload: error })))
                    )
            )
        ));

    createUser$ = createEffect(() => this.actions$
        .pipe(
            ofType(UserAction.createUserAction),
            mergeMap(
                data => this.userService.createUser(data.payload)
                    .pipe(
                        switchMap(() => [
                            UserAction.createUserSuccessAction({ payload: data.payload }),
                            UserAction.loadUsersAction()
                        ]),
                        catchError(error => of(UserAction.loadUsersFailureAction({ payload: error })))
                    )
            )
        ));

    editUser$ = createEffect(() => this.actions$
        .pipe(
            ofType(UserAction.editUserAction),
            mergeMap(
                (data) => this.userService.updateUser(data.payload)
                    .pipe(
                        switchMap(() => [
                            UserAction.editUserSuccessAction({ payload: data.payload }),
                            UserAction.loadUsersAction()
                        ]),
                        catchError(error => of(UserAction.loadUsersFailureAction({ payload: error })))
                    )
            )
        ));

    @Effect() deleteUser = this.actions$
        .pipe(
            ofType(UserAction.deleteUserAction),
            mergeMap(
                (data) => this.userService.deleteUser(data.payload)
                    .pipe(
                        map(() => UserAction.deleteUserSuccessAction({ payload: data.payload })),
                        catchError(error => of(UserAction.loadUsersFailureAction({ payload: error })))
                    )
            )
        );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}
