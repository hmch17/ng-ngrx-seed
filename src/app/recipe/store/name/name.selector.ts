import { createSelector } from '@ngrx/store';
import { RecipeState } from '../recipe.state';
import { recipeSelector } from '../recipe.selector';

export const nameSelector =
    createSelector(recipeSelector, (state: RecipeState): string => state.name);
