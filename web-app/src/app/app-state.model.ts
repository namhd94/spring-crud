import { CreateUserReducerState } from './user/store/reducers/create-user.reducers';
import { UserReducerState } from './user/store/reducers/user.reducers';
export interface AppState {
    user: UserReducerState;
    createUser: CreateUserReducerState;
}