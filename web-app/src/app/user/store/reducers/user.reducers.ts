import { UserAction, UserActionTypes } from './../actions/user.actions';
import { User } from './../../user.model';

export interface UserReducerState {
    list: User[];
    loading: boolean;
    error: Error;
}

const initialState: UserReducerState = {
    list: [],
    loading: false,
    error: undefined
}

export function UserReducer(state: UserReducerState = initialState, action: UserAction) {
    switch (action.type) {
        case UserActionTypes.LOAD_USER:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.LOAD_USER_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false,
            };
        case UserActionTypes.LOAD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
