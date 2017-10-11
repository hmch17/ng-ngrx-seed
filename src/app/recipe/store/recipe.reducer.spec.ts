import { TestBed } from '@angular/core/testing';
import * as _ from 'lodash';
import { mockRecipeItems } from '../../test/recipe-items.mock';
import { mockAction } from '../../test/action.mock';
import { recipeReducer } from './recipe.reducer';
import { RecipeAction, SetRecipeAction } from './recipe.actions';
import { mockRecipe } from '../test/recipes.mock';
import { Recipe } from './models/recipe';
import { mockRecipeState } from '../test/recipe-state.mock';

describe('recipeReducer', () => {
    const state = mockRecipeState;
    it('should update the state with the SetRecipeItemsAction\'s payload', () => {
        const testingRecipe = mockRecipe;
        const updatedRecipe = _.assign({}, { introduction: 'test' }, testingRecipe);
        const outcome = recipeReducer(state, new SetRecipeAction(<Recipe>updatedRecipe));
        const expected = _.assign({}, state, {
            introduction: updatedRecipe.introduction
        });

        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = recipeReducer(state, <RecipeAction>mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
