import { Observable } from 'rxjs/Observable';
import { mockRecipeItems } from './recipe-items.mock';
export const cookbookApiServiceStub = {
    getRecipeItems$: (userId: string) => Observable.of(mockRecipeItems)
};
