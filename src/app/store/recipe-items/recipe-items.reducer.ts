import { RecipeItem } from '../models/recipe-item';
import { RecipeItemsAction, RecipeItemsActionTypes } from './recipe-items.actions';
export function recipeItemsReducer(
    state: RecipeItem[] = [],
    action: RecipeItemsAction
): RecipeItem[] {
    switch (action.type) {
        case RecipeItemsActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
