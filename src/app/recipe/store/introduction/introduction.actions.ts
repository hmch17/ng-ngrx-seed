import { Action } from '@ngrx/store';
export class IntroductionActionTypes {
    static readonly SET = 'SET_INTRODUCTION';
    static readonly POST = 'POST_INTRODUCTION';
}

export class SetIntroductionAction implements Action {
    readonly type = IntroductionActionTypes.SET;
    constructor(public payload: string) { }
}

export class PostIntroductionAction implements Action {
    readonly type = IntroductionActionTypes.POST;
    constructor(public payload: string) { }
}

export type IntroductionAction
    = SetIntroductionAction
    | PostIntroductionAction;
