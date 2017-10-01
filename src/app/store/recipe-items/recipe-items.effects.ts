import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import '../../utils/rxjs-operators';
import { RecipeItem } from '../models/recipe-item';
import { CookbookApiService } from '../cookbook-api.service';
import { RecipeItemsActionTypes, RecipeItemsAction, RequestRecipeItemsAction, SetRecipeItemsAction } from './recipe-items.actions';

@Injectable()
export class RecipeItemsEffects {
    @Effect() requestRecipeItems$: Observable<SetRecipeItemsAction>;
    constructor(
        private actions$: Actions,
        private apiService: CookbookApiService
    ) {
        this.requestRecipeItems$ = actions$
            .ofType(RecipeItemsActionTypes.REQUEST)
            .map((action: RequestRecipeItemsAction) => action.payload)
            .switchMap((userId: string) => this.apiService.getRecipeItems$(userId))
            .distinctUntilChanged()
            .map(recipeItems => new SetRecipeItemsAction(recipeItems))
            .catch(err => Observable.throw(err));
    }
}
