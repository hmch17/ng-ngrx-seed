import { recipeSelector } from './recipe.selector';
import { RecipeState } from './recipe-state';
import { mockRootState } from '../test/recipe-state.mock';

describe('recipeSelector', () => {
    it('should return the recipe state', () => {
        const recipe: RecipeState = recipeSelector(mockRootState);
        const expectedResult: RecipeState = mockRootState.recipe;
        expect(recipe).toEqual(expectedResult);
    });
});
