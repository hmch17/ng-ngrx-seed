import { selectedProcessIdSelector } from './selected-process-id.selector';
import { mockRootState } from '../../test/recipe-state.mock';
import { Process } from '../models/process';

describe('processesSelector', () => {
    it('should return the selected process id', () => {
        const selectedState: string = selectedProcessIdSelector(mockRootState);
        expect(selectedState).toEqual(mockRootState.recipe.selectedProcessId);
    });
});
