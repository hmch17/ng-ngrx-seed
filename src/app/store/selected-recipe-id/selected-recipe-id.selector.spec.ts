import { selectedRecipeIdSelector } from './selected-recipe-id.selector';
import { RecipeItem } from '../models/recipe-item';
import { mockCookbookState } from '../../test/cookbook-state.mock';

describe('selectedRecipeIdSelector', () => {
    it('should return the selectedRecipeId', () => {
        const selectedState: string = selectedRecipeIdSelector(mockCookbookState);
        expect(selectedState).toEqual(mockCookbookState.selectedRecipeId);
    });
});
