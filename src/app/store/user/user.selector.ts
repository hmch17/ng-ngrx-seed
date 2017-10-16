import { createSelector } from '@ngrx/store';
import { CookbookState } from '../cookbook-state';
import { cookbookSelector } from '../cookbook.selector';
import { User } from '../models/user';

export const userSelector =
    createSelector(cookbookSelector, (state: CookbookState): User => state.user);
