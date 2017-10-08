import { introductionSelector } from './introduction.selector';
import { mockRecipeState } from '../../test/recipe-state.mock';

describe('introductionSelector', () => {
    it('should return the introduction', () => {
        const selectedState: string = introductionSelector(mockRecipeState);
        expect(selectedState).toEqual(mockRecipeState.introduction);
    });
});
