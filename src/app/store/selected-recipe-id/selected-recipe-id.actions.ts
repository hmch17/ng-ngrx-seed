import { Action } from '@ngrx/store';
import { RecipeItem } from '../models/recipe-item';

export class SelectedRecipeIdActionTypes {
    static readonly SET = 'SET_SELECTED_RECIPE_ID';
}

export class SetSelectedRecipeIdAction implements Action {
    readonly type = SelectedRecipeIdActionTypes.SET;
    constructor(public payload: string) { }
}

export type SelectedRecipeIdAction
    = SetSelectedRecipeIdAction;
