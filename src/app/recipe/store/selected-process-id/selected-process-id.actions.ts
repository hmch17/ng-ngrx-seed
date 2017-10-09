import { Action } from '@ngrx/store';
export class SelectedProcessIdActionTypes {
    static readonly SET = 'SET_PROCESSES';
}

export class SetSelectedProcessIdAction implements Action {
    readonly type = SelectedProcessIdActionTypes.SET;
    constructor(public payload: string) { }
}

export type SelectedProcessIdAction
    = SetSelectedProcessIdAction;
