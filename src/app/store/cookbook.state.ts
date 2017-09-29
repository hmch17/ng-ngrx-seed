import { User } from './models/user';
import { RecipeItem } from './models/recipe-item';
export interface CookbookState {
    recipeItems: RecipeItem[];
    user: User;
}
