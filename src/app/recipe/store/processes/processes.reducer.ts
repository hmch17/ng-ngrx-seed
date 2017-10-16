import { ProcessesAction, ProcessesActionTypes } from './processes.actions';
import { Process } from '../models/process';
import { RecipeActionTypes, RecipeAction } from '../recipe.actions';
export function processesReducer(
    state: Process[],
    action: ProcessesAction | RecipeAction
): Process[] {
    switch (action.type) {
        case RecipeActionTypes.SET:
            return action.payload.processes;
        case ProcessesActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
