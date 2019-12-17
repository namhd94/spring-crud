import { UserMode } from './../../user-mode.model';
import { UserAction, UserActionTypes } from './../actions/user.actions';

export interface CreateUserReducerState {
    list: UserMode;
    loading: boolean;
    error: Error;
}

const initialState: CreateUserReducerState = {
    list: new UserMode(),
    loading: false,
    error: undefined
}

export function CreateUserReducer(state: CreateUserReducerState = initialState, action: UserAction) {
    switch (action.type) {
        case UserActionTypes.LOAD_CREATE_USER:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        default:
            return state;
    }
}