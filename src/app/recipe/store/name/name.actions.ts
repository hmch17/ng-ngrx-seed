import { Action } from '@ngrx/store';
export class NameActionTypes {
    static readonly SET = 'SET_NAME';
    static readonly POST = 'POST_NAME';
}

export class SetNameAction implements Action {
    readonly type = NameActionTypes.SET;
    constructor(public payload: string) { }
}

export class PostNameAction implements Action {
    readonly type = NameActionTypes.POST;
    constructor(public payload: string) { }
}

export type NameAction
    = SetNameAction
    | PostNameAction;
