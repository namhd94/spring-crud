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
        case UserActionTypes.CREATE_USER:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case UserActionTypes.CREATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case UserActionTypes.EDIT_USER:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.EDIT_USER_SUCCESS:
            return {
                ...state,
                list: state.list,
                loading: false
            };
        case UserActionTypes.EDIT_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                loading: false
            };
        case UserActionTypes.DELETE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
