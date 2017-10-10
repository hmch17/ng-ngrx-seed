import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import '../../utils/rxjs-operators';
import { Recipe } from './models/recipe';
import { RecipeApiService } from './recipe-api.service';
import {
    RecipeActionTypes, RequestRecipeAction,
    SetRecipeAction, UpdateRecipeAction, PostRecipeAction, DeleteRecipeAction
} from './recipe.actions';
import { NewRecipe } from './models/new-recipe';

@Injectable()
export class RecipeEffects {
    @Effect() requestRecipe$: Observable<SetRecipeAction>;
    @Effect() updateRecipe$: Observable<SetRecipeAction>;
    @Effect() postRecipe$: Observable<SetRecipeAction>;
    @Effect({ dispatch: false }) deleteRecipe$: Observable<Response>;
    constructor(
        private actions$: Actions,
        private apiService: RecipeApiService
    ) {
        this.requestRecipe$ = actions$
            .ofType(RecipeActionTypes.REQUEST)
            .map((action: RequestRecipeAction) => action.payload)
            .switchMap((id: string) => this.apiService.getById$(id))
            .distinctUntilChanged()
            .map(recipe => new SetRecipeAction(recipe))
            .catch(err => Observable.throw(err));
        this.updateRecipe$ = actions$
            .ofType(RecipeActionTypes.UPDATE)
            .map((action: UpdateRecipeAction) => action.payload)
            .switchMap((recipe: Recipe) => this.apiService.update$(recipe))
            .distinctUntilChanged()
            .map(recipe => new SetRecipeAction(recipe))
            .catch(err => Observable.throw(err));
        this.postRecipe$ = actions$
            .ofType(RecipeActionTypes.POST)
            .map((action: PostRecipeAction) => action.payload)
            .switchMap((newRecipe: NewRecipe) => this.apiService.post$(newRecipe))
            .distinctUntilChanged()
            .map((recipe: Recipe) => new SetRecipeAction(recipe))
            .catch(err => Observable.throw(err));
        this.deleteRecipe$ = actions$
            .ofType(RecipeActionTypes.DELETE)
            .map((action: DeleteRecipeAction) => action.payload)
            .switchMap((id: string) => this.apiService.delete$(id))
            .catch(err => Observable.throw(err));
    }
}
