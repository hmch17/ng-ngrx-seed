import { User } from './user';
import { RecipeItem } from './recipe-item';
export interface Cookbook {
    id: string;
    author: User;
    recipes: RecipeItem[];
}
