import { nameSelector } from './name.selector';
import { mockRecipeState } from '../../test/recipe-state.mock';

describe('nameSelector', () => {
    it('should return the name', () => {
        const selectedState: string = nameSelector(mockRecipeState);
        expect(selectedState).toEqual(mockRecipeState.name);
    });
});
