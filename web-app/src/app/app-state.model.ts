import { UserReducerState } from './user/store/reducers/user.reducers';
export interface AppState {
    user: UserReducerState;
}