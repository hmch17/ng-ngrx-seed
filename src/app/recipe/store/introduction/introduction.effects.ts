import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import '../../utils/rxjs-operators';
import { RecipeApiService } from '../recipe-api.service';
import {
    IntroductionActionTypes, IntroductionAction,
    RequestIntroductionAction, SetIntroductionAction
} from './introduction.actions';

@Injectable()
export class IntroductionEffects {
    @Effect() requestRecipeItems$: Observable<SetIntroductionAction>;
    constructor(
        private actions$: Actions,
        private apiService: RecipeApiService
    ) {
        this.requestRecipeItems$ = actions$
            .ofType(IntroductionActionTypes.REQUEST)
            .map((action: RequestIntroductionAction) => action.payload)
            .switchMap((userId: string) => this.apiService.getRecipeItems$(userId))
            .distinctUntilChanged()
            .map(recipeItems => new SetIntroductionAction(recipeItems))
            .catch(err => Observable.throw(err));
    }
}
