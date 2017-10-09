import { Action } from '@ngrx/store';
import { Process } from '../models/process';
export class ProcessesActionTypes {
    static readonly SET = 'SET_PROCESSES';
    static readonly POST = 'POST_PROCESSES';
}

export class SetProcessesAction implements Action {
    readonly type = ProcessesActionTypes.SET;
    constructor(public payload: Process[]) { }
}

export class PostProcessesAction implements Action {
    readonly type = ProcessesActionTypes.POST;
    constructor(public payload: Process[]) { }
}

export type ProcessesAction
    = SetProcessesAction
    | PostProcessesAction;
