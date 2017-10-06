import { Observable } from 'rxjs/Observable';
import '../utils/rxjs-operators';
import { mockRecipeItems } from './recipe-items.mock';
export const cookbookServiceStub = {
    load: () => { },
    recipeItems$: Observable.of(mockRecipeItems),
    selectedRecipeId$: Observable.of(mockRecipeItems[ 0 ].id),
    selectedRecipeId: ''
};
