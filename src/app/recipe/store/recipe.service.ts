import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './models/recipe';
import { Store } from '@ngrx/store';
import { RecipeState } from './recipe-state';
import { RequestRecipeAction, PostRecipeAction, UpdateRecipeAction, DeleteRecipeAction } from './recipe.actions';
import { NewRecipe } from './models/new-recipe';
import { nameSelector } from './name/name.selector';
import { Process } from './models/process';
import { processesSelector } from './processes/processes.selector';
import { introductionSelector } from './introduction/introduction.selector';
import { selectedProcessIdSelector } from './selected-process-id/selected-process-id.selector';

@Injectable()
export class RecipeService {

    constructor(
        private store: Store<RecipeState>
    ) { }

    load(id: string): void {
        this.store.dispatch(new RequestRecipeAction(id));
    }

    get name$(): Observable<string> {
        return this.store.select(nameSelector)
            .catch(err => Observable.throw(err));
    }

    get introduction$(): Observable<string> {
        return this.store.select(introductionSelector)
            .catch(err => Observable.throw(err));
    }

    get processes$(): Observable<Process[]> {
        return this.store.select(processesSelector)
            .catch(err => Observable.throw(err));
    }

    get selectedProcessId$(): Observable<string> {
        return this.store.select(selectedProcessIdSelector)
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
