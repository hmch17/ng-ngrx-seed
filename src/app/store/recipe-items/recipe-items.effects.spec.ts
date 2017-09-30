import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as _ from 'lodash';
import { hot, cold } from 'jasmine-marbles';

import { RecipeItemsEffects } from './recipe-items.effects';
import { CookbookApiService } from '../cookbook-api.service';
import { RequestRecipeItemsAction, SetRecipeItemsAction } from './recipe-items.actions';

import { cookbookApiServiceStub } from '../../test/cookbook-api.service.spec';
import { mockRecipeItems } from '../../test/recipe-items.mock';

describe('RecipeItemsEffects', () => {
    let apiService, effects;
    let actions: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RecipeItemsEffects,
                provideMockActions(() => actions),
                { provide: CookbookApiService, useValue: cookbookApiServiceStub }
            ]
        });
        setup();
    });

    describe('requestRecipeItems$', () => {
        it('should return a SetPaginationAction', () => {
            actions = hot('--a-', { a: new RequestRecipeItemsAction(true) });
            const expectedResult = cold('--b', { b: new SetRecipeItemsAction(mockRecipeItems) });

            expect(effects.requestRecipeItems$).toBeObservable(expectedResult);
        });
    });

    describe('requestRecipeItems$', () => {
        it('should return a SetPaginationAction when the force is false', () => {
            actions = hot('--a-', { a: new RequestRecipeItemsAction(false) });
            const expectedResult = cold('--b', { b: new SetRecipeItemsAction(mockRecipeItems) });

            expect(effects.requestRecipeItems$).toBeObservable(expectedResult);
        });
    });

    function setup() {
        apiService = TestBed.get(CookbookApiService);
        effects = TestBed.get(RecipeItemsEffects);
    }
});
