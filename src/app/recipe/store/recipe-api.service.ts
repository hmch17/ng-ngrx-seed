import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

import { Recipe } from './models/recipe';
import { mockRecipes } from '../test/recipes.mock';
import { environment } from '../../../environments/environment';
import { NewRecipe } from './models/new-recipe';
import { cache } from '../../utils/rxjs-helpers';

@Injectable()
export class RecipeApiService {
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) { }

    getRecipe$(id: string): Observable<Recipe> {
        return cache(this.http.get(`${this.baseUrl}/recipes/${id}`))
            .catch(err => Observable.throw(err));
    }

    postNewRecipe$(newRecipe: NewRecipe): Observable<Recipe> {
        return cache(this.http.post(`${this.baseUrl}/recipes`, newRecipe))
            .catch(err => Observable.throw(err));
    }

    updateRecipe$(recipe: Recipe): Observable<Recipe> {
        return cache(this.http.put(`${this.baseUrl}/recipes/${recipe.id}`, recipe))
            .catch(err => Observable.throw(err));
    }

    deleteRecipe$(id: string): Observable<Response> {
        return cache(this.http.delete(`${this.baseUrl}/recipes/${id}`))
            .catch(err => Observable.throw(err));
    }

}
