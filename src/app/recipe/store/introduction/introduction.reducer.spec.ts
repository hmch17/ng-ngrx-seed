import { TestBed } from '@angular/core/testing';
import { mockAction } from '../../test/action.mock';
import { mockRecipes } from '../../test/recipes.mock';
import { introductionReducer } from './introduction.reducer';
import { IntroductionAction, SetIntroductionAction, PostIntroductionAction } from './introduction.actions';
import { Recipe } from '../models/recipe';
import { lorem } from 'faker';

describe('recipeItemsReducer', () => {
    const state = lorem.paragraph;
    it('should update the state with the SetIntroductionAction\'s payload', () => {
        const updatedIntroduction = 'test';
        const outcome = introductionReducer(state, new SetIntroductionAction(updatedIntroduction));
        const expected = updatedIntroduction;
        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = introductionReducer(state, <IntroductionAction>mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
