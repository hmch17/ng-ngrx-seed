import { Recipe } from './models/recipe';
import { Process } from './models/process';
export interface RecipeState {
    name: string;
    introduction: string;
    processes: Process[];
    selectedProcessId: string;
}
