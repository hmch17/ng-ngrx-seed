import { Observable } from 'rxjs/Observable';
import { mockRecipeItems } from './recipe-items.mock';
export const cookbookApiServiceStub = {
    getRecipeItems$: () => Observable.of(mockRecipeItems)
};
