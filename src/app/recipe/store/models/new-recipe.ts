import { Process } from './process';
export interface NewRecipe {
    name: string;
    introduction?: string;
    processes: Process[];
}
