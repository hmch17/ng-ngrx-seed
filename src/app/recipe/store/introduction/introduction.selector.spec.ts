import { introductionSelector } from './introduction.selector';
import { mockRootState } from '../../test/recipe-state.mock';

describe('introductionSelector', () => {
    it('should return the introduction', () => {
        const selectedState: string = introductionSelector(mockRootState);
        expect(selectedState).toEqual(mockRootState.recipe.introduction);
    });
});
