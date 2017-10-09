import { NameAction, NameActionTypes } from './name.actions';
export function nameReducer(
    state: string,
    action: NameAction
): string {
    switch (action.type) {
        case NameActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
