import { combineReducers, Action } from '@ngrx/store';
import { CookbookState } from './cookbook.state';

import { recipeItemsReducer } from './recipe-items/recipe-items.reducer';
import { selectedRecipeIdReducer } from './selected-recipe-id/selected-recipe-id.reducer';

const combinedReducer = combineReducers({
    recipeItems: recipeItemsReducer,
    selectedRecipeId: selectedRecipeIdReducer
});

// This is a workaround for AOT issue
export function cookbookReducer(state: CookbookState, action: Action) {
    return combinedReducer(state, action);
}
