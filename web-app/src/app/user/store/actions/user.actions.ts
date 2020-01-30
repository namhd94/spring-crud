import { UserMode } from './../../user-mode.model';
import { User } from './../../user.model';
import { createAction, props } from '@ngrx/store';
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

export const loadUsersAction = createAction(
    UserActionTypes.LOAD_USER
);

export const loadUsersSuccessAction = createAction(
    UserActionTypes.LOAD_USER_SUCCESS,
    props<{ payload: User[] }>()
);

export const loadUsersFailureAction = createAction(
    UserActionTypes.LOAD_USER_FAILURE,
    props<{ payload: Error }>()
);

export const loadCreateUserAction = createAction(
    UserActionTypes.LOAD_CREATE_USER,
    props<{ payload: UserMode }>()
);

export const createUserAction = createAction(
    UserActionTypes.CREATE_USER,
    props<{payload: User}>()
);
export const createUserSuccessAction = createAction(
    UserActionTypes.CREATE_USER_SUCCESS,
    props<{payload: User}>()
);
export const createUserFailureAction = createAction(
    UserActionTypes.CREATE_USER_FAILURE,
    props<{payload: Error}>()
);

export const editUserAction = createAction(
    UserActionTypes.EDIT_USER,
    props<{payload: User}>()
);
export const editUserSuccessAction = createAction(
    UserActionTypes.EDIT_USER_SUCCESS,
    props<{payload: User}>()
);
export const editUserFailureAction = createAction(
    UserActionTypes.EDIT_USER_FAILURE,
    props<{payload: Error}>()
);

export const deleteUserAction = createAction (
    UserActionTypes.DELETE_USER,
    props<{payload: number}>()
);

export const deleteUserSuccessAction = createAction (
    UserActionTypes.DELETE_USER_SUCCESS,
    props<{payload: number}>()
);

export const deleteUserFailureAction = createAction (
    UserActionTypes.DELETE_USER_FAILURE,
    props<{payload: Error}>()
);
