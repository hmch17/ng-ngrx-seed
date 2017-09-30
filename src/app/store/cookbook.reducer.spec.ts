import { TestBed } from '@angular/core/testing';

import { cookbookReducer } from './cookbook.reducer';

import { mockCookbookState } from '../test/cookbook-state.mock';
import { mockAction } from '../test/action.mock';

describe('cookbookReducer', () => {
    const state = mockCookbookState;

    it('should return the current state when random action is fed', () => {
        const outcome = cookbookReducer(state, mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
