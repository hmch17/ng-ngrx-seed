import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { RecipeItem } from './models/recipe-item';
import { CookbookApiService } from './cookbook-api.service';
import { CookbookState } from './cookbook.state';
import { recipeItemsSelector } from './recipe-items/recipe-items.selector';
import { selectedRecipeIdSelector } from './selected-recipe-id/selected-recipe-id.selector';
import { RequestRecipeItemsAction } from './recipe-items/recipe-items.actions';
import { SetSelectedRecipeIdAction } from './selected-recipe-id/selected-recipe-id.actions';

@Injectable()
export class CookbookService {
    constructor(
        private store: Store<CookbookState>
    ) { }

    load(userId: string): void {
        this.store.dispatch(new RequestRecipeItemsAction(userId));
    }

    get recipeItems$(): Observable<RecipeItem[]> {
        return this.store.select(recipeItemsSelector);
    }

    set selectedRecipeId(id: string) {
        this.store.dispatch(new SetSelectedRecipeIdAction(id));
    }

    get selectedRecipeId$(): Observable<string> {
        return this.store.select(selectedRecipeIdSelector);
    }

}
