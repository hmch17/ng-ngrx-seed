import { Observable } from 'rxjs/Observable';
import '../../utils/rxjs-operators';
import { mockRecipe } from './recipes.mock';
import { NewRecipe } from '../store/models/new-recipe';
import { Recipe } from '../store/models/recipe';
export const recipeServiceStub = {
    load: (id: string) => { },
    recipe$: Observable.of(mockRecipe),
    post: (newRecipe: NewRecipe) => { },
    update: (recipe: Recipe) => { },
    delete: id => { }
};
