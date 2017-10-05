import { TestBed, inject } from '@angular/core/testing';

import { RecipeApiService } from './recipe-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipeApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ RecipeApiService ],
            imports: [ HttpClientTestingModule ]
        });
    });

    it('should be created', inject([ RecipeApiService ], (service: RecipeApiService) => {
        expect(service).toBeTruthy();
    }));
});
