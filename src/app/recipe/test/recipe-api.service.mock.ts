import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import '../../utils/rxjs-operators';
import { mockRecipe, mockPostedRecipe } from './recipes.mock';
import { NewRecipe } from '../store/models/new-recipe';
import { Recipe } from '../store/models/recipe';
import { Action } from '@ngrx/store';
import { mockAction } from './action.mock';
export const recipeApiServiceStub = {
    getById$: (id: string) => Observable.of(mockRecipe),
    post$: (newRecipe: NewRecipe) => Observable.of(mockPostedRecipe),
    update$: (recipe: Recipe) => Observable.of(recipe),
    delete$: (id: string) => Observable.of(mockAction)
};
