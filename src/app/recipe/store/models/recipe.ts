import { NewRecipe } from './new-recipe';
import { Process } from './process';
export interface Recipe extends NewRecipe {
    id: string;
    name: string;
    introduction: string;
    processes: Process[];
}
