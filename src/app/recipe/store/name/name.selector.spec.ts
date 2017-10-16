import { nameSelector } from './name.selector';
import { mockRootState } from '../../test/recipe-state.mock';

describe('nameSelector', () => {
    it('should return the name', () => {
        const selectedState: string = nameSelector(mockRootState);
        expect(selectedState).toEqual(mockRootState.recipe.name);
    });
});
