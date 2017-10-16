import { combineReducers, Action } from '@ngrx/store';

import { recipeItemsReducer } from './recipe-items/recipe-items.reducer';
import { selectedRecipeIdReducer } from './selected-recipe-id/selected-recipe-id.reducer';
import { userReducer } from './user/user.reducer';

export const cookbookReducer = {
    recipeItems: recipeItemsReducer,
    selectedRecipeId: selectedRecipeIdReducer,
    user: userReducer
};
