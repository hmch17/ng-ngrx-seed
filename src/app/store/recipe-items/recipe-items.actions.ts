import { Action } from '@ngrx/store';
import { RecipeItem } from '../models/recipe-item';
export class RecipeItemsActionTypes {
    static readonly REQUEST = 'REQUEST_RECIPE_ITEMS';
    static readonly SET = 'SET_RECIPE_ITEMS';
}

export class RequestRecipeItemsAction implements Action {
    readonly type = RecipeItemsActionTypes.REQUEST;
    constructor(public payload: string) { }
}

export class SetRecipeItemsAction implements Action {
    readonly type = RecipeItemsActionTypes.SET;
    constructor(public payload: RecipeItem[]) { }
}

export type RecipeItemsAction
    = RequestRecipeItemsAction
    | SetRecipeItemsAction;
