import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as _ from 'lodash';
import { hot, cold } from 'jasmine-marbles';

import { RecipeEffects } from './recipe.effects';
import { RecipeApiService } from './recipe-api.service';
import { RequestRecipeAction, SetRecipeAction, UpdateRecipeAction, PostRecipeAction, DeleteRecipeAction } from './recipe.actions';

import { mockRecipes, mockRecipe, mockPostedRecipe, mockUpdatedRecipe, mockNewRecipe } from '../test/recipes.mock';
import { recipeApiServiceStub } from '../test/recipe-api.service.mock';
import { NewRecipe } from './models/new-recipe';
import { mockAction } from '../test/action.mock';

describe('RecipeEffects', () => {
    let apiService, effects;
    let actions: Observable<any>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RecipeEffects,
                provideMockActions(() => actions),
                { provide: RecipeApiService, useValue: recipeApiServiceStub }
            ]
        });
        setup();
    });

    describe('requestRecipe$', () => {
        it('should return a SetRecipeAction', () => {
            actions = hot('--a-', { a: new RequestRecipeAction(mockRecipe.id) });
            const expectedResult = cold('--b', { b: new SetRecipeAction(mockRecipe) });
            expect(effects.requestRecipe$).toBeObservable(expectedResult);
        });
    });
    describe('updateRecipe$', () => {
        it('should return a SetRecipeAction', () => {
            actions = hot('--a-', { a: new UpdateRecipeAction(mockUpdatedRecipe) });
            const expectedResult = cold('--b', { b: new SetRecipeAction(mockUpdatedRecipe) });
            expect(effects.updateRecipe$).toBeObservable(expectedResult);
        });
    });
    describe('postRecipe$', () => {
        it('should return a SetRecipeAction', () => {
            actions = hot('--a-', { a: new PostRecipeAction(mockNewRecipe) });
            const expectedResult = cold('--b', { b: new SetRecipeAction(mockPostedRecipe) });
            expect(effects.postRecipe$).toBeObservable(expectedResult);
        });
    });
    describe('deleteRecipe$', () => {
        it('should return a Response', () => {
            actions = hot('--a-', { a: new DeleteRecipeAction(mockRecipe.id) });
            const expectedResult = hot('--b', { b: mockAction });
            expect(effects.deleteRecipe$).toBeObservable(expectedResult);
        });
    });

    function setup() {
        apiService = TestBed.get(RecipeApiService);
        effects = TestBed.get(RecipeEffects);
    }
});
