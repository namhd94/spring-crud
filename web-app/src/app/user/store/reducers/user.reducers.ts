import * as UserAction from './../actions/user.actions';
import { User } from './../../user.model';
import { on, createReducer, Action } from '@ngrx/store';

export interface UserReducerState {
    list: User[];
    loading: boolean;
    error: Error;
}

const initialState: UserReducerState = {
    list: [],
    loading: false,
    error: undefined
};

const userReducer = createReducer(
    initialState,
    on(UserAction.loadUsersAction, state => ({ ...state, loading: true })),
    on(UserAction.loadUsersSuccessAction, (state, action) => ({ ...state, list: action.payload, loading: false })),
    on(UserAction.loadUsersFailureAction, (state, action) => ({ ...state, error: action.payload, loading: false })),
    on(UserAction.createUserAction, state => ({ ...state, loading: true })),
    on(UserAction.createUserSuccessAction, (state, action) => ({ ...state, list: [...state.list, action.payload], loading: false })),
    on(UserAction.createUserFailureAction, (state, action) => ({ ...state, loading: false, error: action.payload })),
    on(UserAction.editUserAction, state => ({ ...state, loading: true })),
    on(UserAction.editUserSuccessAction, state => ({ ...state, list: state.list, loading: false })),
    on(UserAction.editUserFailureAction, (state, action) => ({ ...state, loading: false, error: action.payload })),
    on(UserAction.deleteUserAction, state => ({ ...state, loading: true })),
    on(UserAction.deleteUserSuccessAction, (state, action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
    })),
    on(UserAction.deleteUserFailureAction, (state, action) => ({ ...state, loading: false, error: action.payload })),
);

export function UserReducer(state: UserReducerState | undefined, action: Action) {
    return userReducer(state, action);
}
