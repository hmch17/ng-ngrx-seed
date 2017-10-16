import { processesSelector } from './processes.selector';
import { mockRootState } from '../../test/recipe-state.mock';
import { Process } from '../models/process';

describe('processesSelector', () => {
    it('should return the processes', () => {
        const selectedState: Process[] = processesSelector(mockRootState);
        expect(selectedState).toEqual(mockRootState.recipe.processes);
    });
});
