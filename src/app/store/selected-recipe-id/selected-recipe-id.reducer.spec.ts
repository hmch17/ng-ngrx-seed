import { TestBed } from '@angular/core/testing';
import { mockRecipeItems } from '../../test/recipe-items.mock';
import { mockAction } from '../../test/action.mock';
import { selectedRecipeIdReducer } from './selected-recipe-id.reducer';
import { SelectedRecipeIdAction, SetSelectedRecipeIdAction } from './selected-recipe-id.actions';
import { RecipeItem } from '../models/recipe-item';

describe('selectedRecipeIdReducer', () => {
    const state = mockRecipeItems[ 0 ].id;
    const newId = mockRecipeItems[ 1 ].id;
    it('should update the state with the SetSelectedRecipeIdAction\'s payload', () => {
        const outcome = selectedRecipeIdReducer(state, new SetSelectedRecipeIdAction(newId));
        const expected = newId;
        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = selectedRecipeIdReducer(state, <SelectedRecipeIdAction>mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
