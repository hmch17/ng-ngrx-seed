import { CookbookState } from '../cookbook.state';
import { RecipeItem } from '../models/recipe-item';

export const recipeItemsSelector = (state: CookbookState): RecipeItem[] => state.recipeItems;
