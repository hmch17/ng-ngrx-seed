import { User } from '../models/user';
import { UserAction, UserActionTypes } from './user.actions';

export function userReducer(state: User = null, action: UserAction): User {
    switch (action.type) {
        case UserActionTypes.SET:
            return action.payload;
        case UserActionTypes.LOGOUT:
            return null;
        default:
            return state;
    }
}
