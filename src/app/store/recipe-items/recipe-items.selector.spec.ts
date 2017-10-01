import { recipeItemsSelector } from './recipe-items.selector';
import { RecipeItem } from '../models/recipe-item';
import { mockCookbookState } from '../../test/cookbook-state.mock';

describe('recipeItemsSelector', () => {
    it('should return the recipeItems', () => {
        const selectedState: RecipeItem[] = recipeItemsSelector(mockCookbookState);
        expect(selectedState).toEqual(mockCookbookState.recipeItems);
    });
});
