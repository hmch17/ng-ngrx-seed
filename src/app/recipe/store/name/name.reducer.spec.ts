import { TestBed } from '@angular/core/testing';
import { mockAction } from '../../test/action.mock';
import { mockRecipes } from '../../test/recipes.mock';
import { nameReducer } from './name.reducer';
import { NameAction, SetNameAction, PostNameAction } from './name.actions';
import { Recipe } from '../models/recipe';
import { lorem } from 'faker';

describe('nameReducer', () => {
    const state = lorem.paragraph;
    it('should update the state with the SetNameAction\'s payload', () => {
        const updatedName = 'test';
        const outcome = nameReducer(state, new SetNameAction(updatedName));
        const expected = updatedName;
        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = nameReducer(state, <NameAction>mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
