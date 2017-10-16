import { mockRecipe } from './recipes.mock';
import { RecipeState } from '../store/recipe-state';
export const mockRecipeState: RecipeState = {
    name: mockRecipe.name,
    introduction: mockRecipe.introduction,
    processes: mockRecipe.processes,
    selectedProcessId: mockRecipe.processes[ 0 ].id
};

export const mockRootState = {
    recipe: mockRecipeState
};
