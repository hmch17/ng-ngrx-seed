import { selectedProcessIdSelector } from './selected-process-id.selector';
import { mockRecipeState } from '../../test/recipe-state.mock';
import { Process } from '../models/process';

describe('processesSelector', () => {
    it('should return the processes', () => {
        const selectedState: string = selectedProcessIdSelector(mockRecipeState);
        expect(selectedState).toEqual(mockRecipeState.selectedProcessId);
    });
});
