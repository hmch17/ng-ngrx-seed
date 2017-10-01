import { TestBed, inject } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { CookbookService } from './cookbook.service';
import { CookbookState } from './cookbook.state';
import { cookbookReducer } from './cookbook.reducer';

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

    function setup() {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        spyOn(store, 'select').and.callThrough();
    }
});
