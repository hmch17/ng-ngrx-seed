import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './models/recipe';
import { Store } from '@ngrx/store';
import { RecipeState } from './recipe.state';
import { RequestRecipeAction, PostRecipeAction, UpdateRecipeAction, DeleteRecipeAction } from './recipe.actions';
import { recipeSelector } from './recipe.selector';
import { NewRecipe } from './models/new-recipe';

@Injectable()
export class RecipeService {

    constructor(
        private store: Store<RecipeState>
    ) { }

    load(id: string): void {
        this.store.dispatch(new RequestRecipeAction(id));
    }

    get recipe$(): Observable<Recipe> {
        return this.store.select(recipeSelector)
            .catch(err => Observable.throw(err));
    }

    post(newRecipe: NewRecipe) {
        this.store.dispatch(new PostRecipeAction(newRecipe));
    }

    update(recipe: Recipe) {
        this.store.dispatch(new UpdateRecipeAction(recipe));
    }

    delete(id: string) {
        this.store.dispatch(new DeleteRecipeAction(id));
    }

}
