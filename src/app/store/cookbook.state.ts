import { RecipeItem } from './models/recipe-item';
import { User } from './models/user';
export interface CookbookState {
    recipeItems: RecipeItem[];
    selectedRecipeId: string;
    user: User;
}
