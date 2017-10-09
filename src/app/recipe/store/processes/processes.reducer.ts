import { ProcessesAction, ProcessesActionTypes } from './processes.actions';
import { Process } from '../models/process';
export function processesReducer(
    state: Process[],
    action: ProcessesAction
): Process[] {
    switch (action.type) {
        case ProcessesActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
