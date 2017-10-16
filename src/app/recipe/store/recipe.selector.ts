import { RecipeState } from './recipe-state';
import { createFeatureSelector } from '@ngrx/store';

export const recipeSelector = createFeatureSelector<RecipeState>('recipe');
