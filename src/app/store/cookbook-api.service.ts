import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { RecipeItem } from './models/recipe-item';

import { mockRecipeItems } from '../test/recipe-items.mock';

@Injectable()
export class CookbookApiService {

    constructor() { }

    getRecipeItems$(force = false): Observable<RecipeItem[]> {
        return Observable.of(mockRecipeItems);
    }

}
