import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as _ from 'lodash';
import { hot, cold } from 'jasmine-marbles';

import { RecipeItemsEffects } from './recipe-items.effects';
import { CookbookApiService } from '../cookbook-api.service';
import { RequestRecipeItemsAction, SetRecipeItemsAction } from './recipe-items.actions';

import { cookbookApiServiceStub } from '../../test/cookbook-api.service.mock';
import { mockRecipeItems } from '../../test/recipe-items.mock';
import { mockUser } from '../../test/user.mock';

describe('RecipeItemsEffects', () => {
    let apiService, effects;
    let actions: Observable<any>;
    const userId = mockUser.id;
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
            actions = hot('--a-', { a: new RequestRecipeItemsAction(userId) });
            const expectedResult = cold('--b', { b: new SetRecipeItemsAction(mockRecipeItems) });

            expect(effects.requestRecipeItems$).toBeObservable(expectedResult);
        });
    });

    function setup() {
        apiService = TestBed.get(CookbookApiService);
        effects = TestBed.get(RecipeItemsEffects);
    }
});
