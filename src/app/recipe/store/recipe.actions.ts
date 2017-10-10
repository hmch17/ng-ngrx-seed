import { Action } from '@ngrx/store';
import { NewRecipe } from './models/new-recipe';
import { Recipe } from './models/recipe';
export class RecipeActionTypes {
    static readonly REQUEST = 'REQUEST_RECIPE';
    static readonly SET = 'SET_RECIPE';
    static readonly POST = 'POST_RECIPE';
    static readonly UPDATE = 'UPDATE_RECIPE';
    static readonly DELETE = 'DELETE_RECIPE';
}

export class RequestRecipeAction implements Action {
    readonly type = RecipeActionTypes.REQUEST;
    constructor(public payload: string) { }
}

export class SetRecipeAction implements Action {
    readonly type = RecipeActionTypes.SET;
    constructor(public payload: Recipe) { }
}

export class PostRecipeAction implements Action {
    readonly type = RecipeActionTypes.POST;
    constructor(public payload: NewRecipe) { }
}

export class UpdateRecipeAction implements Action {
    readonly type = RecipeActionTypes.UPDATE;
    constructor(public payload: Recipe) { }
}

export class DeleteRecipeAction implements Action {
    readonly type = RecipeActionTypes.DELETE;
    constructor(public payload: string) { }
}

export type RecipeAction
    = RequestRecipeAction
    | SetRecipeAction
    | PostRecipeAction
    | UpdateRecipeAction
    | DeleteRecipeAction;
