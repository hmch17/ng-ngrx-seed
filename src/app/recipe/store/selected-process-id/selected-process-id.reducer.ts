import { SelectedProcessIdAction, SelectedProcessIdActionTypes } from './selected-process-id.actions';
export function selectedProcessIdReducer(
    state: string,
    action: SelectedProcessIdAction
): string {
    switch (action.type) {
        case SelectedProcessIdActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
