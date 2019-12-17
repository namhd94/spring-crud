import { UserMode } from './../../user-mode.model';
import { User } from './../../user.model';
import { Action } from '@ngrx/store';
export enum UserActionTypes {
    LOAD_USER = '[User Component] Load Users',
    LOAD_USER_SUCCESS = '[User Component] Load Users Success',
    LOAD_USER_FAILURE = '[User Component] Load Users Failure',
    LOAD_CREATE_USER = '[User Component] Load Create User',
    CREATE_USER = '[Create User Component] Create User',
    CREATE_USER_SUCCESS = '[Create User Component] Create User Success',
    CREATE_USER_FAILURE = '[Create User Component] Create User Failure',
    DELETE_USER = '[User Component] Delete User',
    DELETE_USER_SUCCESS = '[User Component] Delete User Success',
    DELETE_USER_FAILURE = '[User Component] Delete User Failure',
    EDIT_USER = '[Create User Component] Edit User',
    EDIT_USER_SUCCESS = '[Create User Component] Edit User Success',
    EDIT_USER_FAILURE = '[Create User Component] Edit User Failure',
    LOAD_USER_DETAIL = '[User Detail Component] Load User Detail',
    LOAD_USER_DETAIL_SUCCESS = '[User Detail Component] Load User Detail Success',
    LOAD_USER_DETAIL_FAILURE = '[User Detail Component] Load User Detail Failure'
}

export class LoadUserAction implements Action {
    readonly type = UserActionTypes.LOAD_USER;
}

export class LoadUserSuccessAction implements Action {
    readonly type = UserActionTypes.LOAD_USER_SUCCESS;
    constructor(public payload: User[]) { }
}

export class LoadUserFailureAction implements Action {
    readonly type = UserActionTypes.LOAD_USER_FAILURE;
    constructor(public payload: Error) { }
}

export class LoadCreateUserAction implements Action {
    readonly type = UserActionTypes.LOAD_CREATE_USER;
    constructor(public payload: UserMode) { }
}

export class CreateUserAction implements Action {
    readonly type = UserActionTypes.CREATE_USER;
    constructor(public payload: User) { }
}

export class CreateUserSuccessAction implements Action {
    readonly type = UserActionTypes.CREATE_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class CreateUserFailureAction implements Action {
    readonly type = UserActionTypes.CREATE_USER_FAILURE;
    constructor(public payload: Error) { }
}
export class EditUserAction implements Action {
    readonly type = UserActionTypes.EDIT_USER;
    constructor(public payload: User) { }
}

export class EditUserSuccessAction implements Action {
    readonly type = UserActionTypes.EDIT_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class EditUserFailureAction implements Action {
    readonly type = UserActionTypes.EDIT_USER_FAILURE;
    constructor(public payload: Error) { }
}

export class DeleteUserAction implements Action {
    readonly type = UserActionTypes.DELETE_USER;
    constructor(public payload: number) { }
}

export class DeleteUserSuccessAction implements Action {
    readonly type = UserActionTypes.DELETE_USER_SUCCESS;
    constructor(public payload: number) { }
}

export class DeleteUserFailureAction implements Action {
    readonly type = UserActionTypes.DELETE_USER_FAILURE;
    constructor(public payload: Error) { }
}


export type UserAction = LoadUserAction |
    LoadUserSuccessAction |
    LoadUserFailureAction |
    LoadCreateUserAction |
    CreateUserAction |
    CreateUserSuccessAction |
    CreateUserFailureAction |
    EditUserAction  |
    EditUserSuccessAction  |
    EditUserFailureAction  |
    DeleteUserAction |
    DeleteUserSuccessAction |
    DeleteUserFailureAction;
