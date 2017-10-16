import { NameAction, NameActionTypes } from './name.actions';
import { RecipeAction, RecipeActionTypes } from '../recipe.actions';
export function nameReducer(
    state: string,
    action: NameAction | RecipeAction
): string {
    switch (action.type) {
        case RecipeActionTypes.SET:
            return action.payload.name;
        case NameActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
