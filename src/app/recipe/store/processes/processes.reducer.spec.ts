import { TestBed } from '@angular/core/testing';
import { mockAction } from '../../test/action.mock';
import { mockRecipes } from '../../test/recipes.mock';
import { processesReducer } from './processes.reducer';
import { ProcessesAction, SetProcessesAction, PostProcessesAction } from './processes.actions';
import { lorem } from 'faker';

describe('processesReducer', () => {
    const state = lorem.paragraph;
    it('should update the state with the SetProcessesAction\'s payload', () => {
        const updatedProcesses = [ { id: 'test', description: 'test', ingredients: [ { name: 'ingredient', quantity: '2 spoon' }] }];
        const outcome = processesReducer(state, new SetProcessesAction(updatedProcesses));
        const expected = updatedProcesses;
        expect(outcome).toEqual(expected);
    });
    it('should return the current state when random action is fed', () => {
        const outcome = processesReducer(state, <ProcessesAction>mockAction);
        const expected = state;
        expect(outcome).toEqual(expected);
    });
});
