import { TestBed, inject } from '@angular/core/testing';

import { CookbookService } from './cookbook.service';
import { Store } from '@ngrx/store';
import { StoreStub } from '../test/store-stub.spec';

describe('CookbookService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CookbookService,
                { provide: Store, useClass: StoreStub }
            ]
        });
    });

    it('should be created', inject([ CookbookService ], (service: CookbookService) => {
        expect(service).toBeTruthy();
    }));
});
