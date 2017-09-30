import { TestBed } from '@angular/core/testing';
import { mockRecipeItems } from '../test/recipe-items.mock';
import { mockAction } from '../test/action.mock';
import { recipeItemsReducer } from './recipe-items.reducer';
import { RecipeItemsAction, SetRecipeItemsAction } from './recipe-items.actions';
import { RecipeItem } from '../models/recipe-item';

describe('recipeItemsReducer', () => {
    const state = mockRecipeItems;
    it('should update the state with the SetRecipeItemsAction\'s payload', () => {
        const testingRecipeItem: RecipeItem = { id: 'test-id', name: 'test recipe item' };
        const updatedRecipeItems = [ ...mockRecipeItems, testingRecipeItem ];
        const outcome = recipeItemsReducer(state, new SetRecipeItemsAction(updatedRecipeItems));
        const expected = updatedRecipeItems;
        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = recipeItemsReducer(state, <RecipeItemsAction>mockAction);
        const expected = mockRecipeItems;
        expect(outcome).toEqual(expected);
    });
});
