import { TestBed, inject } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { CookbookService } from './cookbook.service';
import { CookbookState } from './cookbook.state';
import { cookbookReducer } from './cookbook.reducer';
import { RequestRecipeItemsAction } from './recipe-items/recipe-items.actions';
import { recipeItemsSelector } from './recipe-items/recipe-items.selector';
import { selectedRecipeIdSelector } from './selected-recipe-id/selected-recipe-id.selector';
import { mockRecipeItems } from '../test/recipe-items.mock';
import { SetSelectedRecipeIdAction } from './selected-recipe-id/selected-recipe-id.actions';

describe('CookbookService', () => {
    let store: Store<CookbookState>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(cookbookReducer)
            ],
            providers: [
                CookbookService
            ]
        });
        setup();
    });

    it('should be created', inject([ CookbookService ], (service: CookbookService) => {
        expect(service).toBeTruthy();
    }));

    it('should dispatch a RequestRecipeItemsAction(true) when load() is fired', inject(
        [ CookbookService ], (service: CookbookService) => {
            service.load();
            expect(store.dispatch).toHaveBeenCalledWith(new RequestRecipeItemsAction(true));
        })
    );

    it('should select recipeItemsSelector when recipeItems$() is being called', inject(
        [ CookbookService ], (service: CookbookService) => {
            const recipeItems$ = service.recipeItems$;
            expect(store.select).toHaveBeenCalledWith(recipeItemsSelector);
        })
    );

    it('should dispatch a SetSelectedRecipeIdAction(id) when selectedRecipeId() is fired', inject(
        [ CookbookService ], (service: CookbookService) => {
            const id = mockRecipeItems[ 0 ].id;
            service.selectedRecipeId = id;
            expect(store.dispatch).toHaveBeenCalledWith(new SetSelectedRecipeIdAction(id));
        })
    );

    it('should select selectedRecipeIdSelector when selectedRecipeId$() is being called', inject(
        [ CookbookService ], (service: CookbookService) => {
            const selectedRecipeId$ = service.selectedRecipeId$;
            expect(store.select).toHaveBeenCalledWith(selectedRecipeIdSelector);
        })
    );

    function setup() {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        spyOn(store, 'select').and.callThrough();
    }
});
