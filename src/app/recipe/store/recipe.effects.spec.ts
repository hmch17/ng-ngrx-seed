import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as _ from 'lodash';
import { hot, cold } from 'jasmine-marbles';

import { RecipeEffects } from './recipe.effects';
import { RecipeApiService } from './recipe-api.service';
import { RequestRecipeAction, SetRecipeAction } from './recipe.actions';

import { mockRecipes, mockRecipe } from '../test/recipes.mock';
import { recipeApiServiceStub } from '../test/recipe-api.service.mock';

describe('RecipeItemsEffects', () => {
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

            expect(effects.requestRecipeItems$).toBeObservable(expectedResult);
        });
    });

    function setup() {
        apiService = TestBed.get(RecipeApiService);
        effects = TestBed.get(RecipeEffects);
    }
});
