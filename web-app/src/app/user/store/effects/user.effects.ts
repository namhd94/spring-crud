import { UserService } from './../../user.service';
import * as UserAction from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
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

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}