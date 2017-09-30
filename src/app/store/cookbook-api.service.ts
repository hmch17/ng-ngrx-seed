import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RecipeItem } from './models/recipe-item';

@Injectable()
export class CookbookApiService {

    constructor() { }

    getRecipeItems$(force = false): Observable<RecipeItem[]> {
        const recipeItems = [];
        return Observable.of(recipeItems);
    }

}
