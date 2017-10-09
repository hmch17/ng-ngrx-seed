import { processesSelector } from './processes.selector';
import { mockRecipeState } from '../../test/recipe-state.mock';
import { Process } from '../models/process';

describe('processesSelector', () => {
    it('should return the processes', () => {
        const selectedState: Process[] = processesSelector(mockRecipeState);
        expect(selectedState).toEqual(mockRecipeState.processes);
    });
});
