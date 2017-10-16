import { createSelector } from '@ngrx/store';
import { CookbookState } from '../cookbook-state';
import { cookbookSelector } from '../cookbook.selector';

export const selectedRecipeIdSelector =
    createSelector(cookbookSelector, (state: CookbookState): string => state.selectedRecipeId);
