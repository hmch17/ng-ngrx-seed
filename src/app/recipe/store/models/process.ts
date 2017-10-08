import { Ingredient } from './ingredient';
export interface Process {
    id: string;
    description: string;
    ingredients: Ingredient[];
}
