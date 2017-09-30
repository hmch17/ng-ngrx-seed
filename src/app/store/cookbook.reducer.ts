import { combineReducers, Action } from '@ngrx/store';
import { CookbookState } from './cookbook.state';

import { recipeItemsReducer } from './recipe-items/recipe-items.reducer';
import { selectedRecipeIdReducer } from './selected-recipe-id/selected-recipe-id.reducer';

export const cookbookReducer = combineReducers({
    recipeItems: recipeItemsReducer,
    selectedRecipeId: selectedRecipeIdReducer
});
