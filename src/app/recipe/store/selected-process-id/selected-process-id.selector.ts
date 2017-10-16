import { createSelector } from '@ngrx/store';
import { RecipeState } from '../recipe-state';
import { recipeSelector } from '../recipe.selector';

export const selectedProcessIdSelector =
    createSelector(recipeSelector, (state: RecipeState): string => state.selectedProcessId);
