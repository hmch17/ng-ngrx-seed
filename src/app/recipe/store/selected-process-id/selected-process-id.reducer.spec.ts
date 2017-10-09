import { TestBed } from '@angular/core/testing';
import { mockAction } from '../../test/action.mock';
import { mockRecipes } from '../../test/recipes.mock';
import { selectedProcessIdReducer } from './selected-process-id.reducer';
import { SelectedProcessIdAction, SetSelectedProcessIdAction } from './selected-process-id.actions';

describe('selectedProcessIdReducer', () => {
    const state = mockRecipes[ 0 ].processes[ 0 ].id;
    it('should update the state with the SetSelectedProcessIdAction\'s payload', () => {
        const newSelectedProcessId = mockRecipes[ 0 ].processes[ 1 ].id;
        const outcome = selectedProcessIdReducer(state, new SetSelectedProcessIdAction(newSelectedProcessId));
        const expected = newSelectedProcessId;
        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = selectedProcessIdReducer(state, <SelectedProcessIdAction>mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
