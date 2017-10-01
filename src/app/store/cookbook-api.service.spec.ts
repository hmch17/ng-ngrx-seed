import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CookbookApiService } from './cookbook-api.service';

describe('CookbookApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ CookbookApiService ],
            imports: [ HttpClientTestingModule ]
        });
    });

    it('should be created', inject([ CookbookApiService ], (service: CookbookApiService) => {
        expect(service).toBeTruthy();
    }));
});
