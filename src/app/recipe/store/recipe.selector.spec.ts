import { recipeSelector } from './recipe.selector';
import { RecipeState } from './recipe.state';
import { mockRecipeState } from '../test/recipe-state.mock';

describe('recipeSelector', () => {
    it('should return the recipe state', () => {
        const recipe: RecipeState = recipeSelector(mockRecipeState);
        const expectedResult: RecipeState = mockRecipeState;
        expect(recipe).toEqual(expectedResult);
    });
});
