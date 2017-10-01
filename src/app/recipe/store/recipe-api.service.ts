import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Recipe } from './models/recipe';
import { mockRecipes } from '../test/recipes.mock';

@Injectable()
export class RecipeApiService {

    constructor() { }

    getRecipe$(id: string): Observable<Recipe> {
        const recipe = _.find(mockRecipes, { id });
        return Observable.of(recipe);
    }

}
