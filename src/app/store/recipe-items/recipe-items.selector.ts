import { createSelector } from '@ngrx/store';
import { CookbookState } from '../cookbook.state';
import { RecipeItem } from '../models/recipe-item';
import { cookbookSelector } from '../cookbook.selector';

export const recipeItemsSelector =
    createSelector(cookbookSelector, (state: CookbookState): RecipeItem[] => state.recipeItems);
