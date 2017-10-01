/* tslint:disable:no-unused-variable */
import { userReducer } from './user.reducer';
import { SetUserAction, UserLogoutAction, UserAction } from './user.actions';
import { User } from '../models/user';

import { mockAction } from '../../test/action.mock';
import { mockUser } from '../../test/user.mock';

describe('userStatusReducer', () => {
    it('should return the payload when SetUserStatusAction is fired', () => {
        const originalState: User = null;
        const action: UserAction = new SetUserAction(mockUser);
        const newState = userReducer(originalState, action);
        expect(newState).toEqual(action.payload);
    });

    it('should return null when UserLogoutAction is fired', () => {
        const originalState: User = mockUser;
        const action: UserAction = new UserLogoutAction();
        const newState = userReducer(originalState, action);
        expect(newState).toEqual(null);
    });

    it('should return the current state when a random action is fired', () => {
        const originalState: User = mockUser;
        const action: any = mockAction;
        const newState = userReducer(originalState, action);
        expect(newState).toEqual(originalState);
    });
});
