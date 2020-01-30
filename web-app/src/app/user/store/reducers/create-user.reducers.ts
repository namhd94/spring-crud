import { createReducer, on, Action } from '@ngrx/store';
import { UserMode } from './../../user-mode.model';
import { loadCreateUserAction } from './../actions/user.actions';

export interface CreateUserReducerState {
    list: UserMode;
    loading: boolean;
    error: Error;
}

const initialState: CreateUserReducerState = {
    list: new UserMode(),
    loading: false,
    error: undefined
};

const createUserReducer = createReducer(
    initialState,
    on(loadCreateUserAction, (state, action) => ({ ...state, list: action.payload, loading: false }))
);

export function CreateUserReducer(state: CreateUserReducerState | undefined, action: Action) {
    return createUserReducer(state, action);
}
