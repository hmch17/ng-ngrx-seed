import { createSelector } from '@ngrx/store';
import { RecipeState } from '../recipe.state';
import { recipeSelector } from '../recipe.selector';
import { Process } from '../models/process';

export const processesSelector =
    createSelector(recipeSelector, (state: RecipeState): Process[] => state.processes);
