import { mockRecipe } from './recipes.mock';
import { RecipeState } from '../store/recipe.state';
export const mockRecipeState: RecipeState = {
    introduction: mockRecipe.introduction,
    processes: mockRecipe.processes,
    selectedProcessId: mockRecipe.processes[ 0 ].id
};
