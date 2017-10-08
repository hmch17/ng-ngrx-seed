import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as _ from 'lodash';
import { hot, cold } from 'jasmine-marbles';

import { IntroductionEffects } from './introduction.effects';
import { RecipeApiService } from '../recipe-api.service';
import { RequestIntroductionAction, SetIntroductionAction } from './introduction.actions';

import { cookbookApiServiceStub } from '../../test/recipe-api.service.mock';
import { mockRecipes } from '../../test/recipes.mock';

describe('RecipeItemsEffects', () => {
    let apiService, effects;
    let actions: Observable<any>;
    const userId = mockUser.id;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                IntroductionEffects,
                provideMockActions(() => actions),
                { provide: CookbookApiService, useValue: cookbookApiServiceStub }
            ]
        });
        setup();
    });

    describe('requestRecipeItems$', () => {
        it('should return a SetPaginationAction', () => {
            actions = hot('--a-', { a: new RequestIntroductionAction(userId) });
            const expectedResult = cold('--b', { b: new SetIntroductionAction(mockRecipeItems) });

            expect(effects.requestRecipeItems$).toBeObservable(expectedResult);
        });
    });

    function setup() {
        apiService = TestBed.get(CookbookApiService);
        effects = TestBed.get(IntroductionEffects);
    }
});
