import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { actionType } from '../../utils/store';

export class UserActionTypes {
    static readonly REQUEST = actionType('REQUEST_USER');
    static readonly SET = actionType('SET_USER');
    static readonly LOGOUT = actionType('USER_LOGOUT');
    static readonly LOGIN = actionType('USER_LOGIN');
}

export class RequestUserAction implements Action {
    readonly type = UserActionTypes.REQUEST;

    constructor(public payload: boolean) {
    }
}

export class SetUserAction implements Action {
    readonly type = UserActionTypes.SET;

    constructor(public payload: User) {
    }
}

export class UserLoginAction implements Action {
    readonly type = UserActionTypes.LOGIN;

    constructor(public payload?: any) {
    }
}

export class UserLogoutAction implements Action {
    readonly type = UserActionTypes.LOGOUT;

    constructor(public payload?: any) {
    }
}

export type UserAction
    = RequestUserAction
    | SetUserAction
    | UserLoginAction
    | UserLogoutAction;
