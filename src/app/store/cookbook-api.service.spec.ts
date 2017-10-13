import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';
import '../utils/rxjs-operators';

import { CookbookApiService } from './cookbook-api.service';
import { mockUser } from '../test/user.mock';
import { mockRecipeItems } from '../test/recipe-items.mock';
import { errorResponseMock } from '../test/error-response.mock';
import { Observable } from 'rxjs/Observable';

describe('CookbookApiService', () => {
    let httpMock: HttpTestingController;
    let service: CookbookApiService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ CookbookApiService ],
            imports: [ HttpClientTestingModule ]
        });
        setup();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should successfully get recipe items', () => {
        const requestUrl = `${service.baseUrl}/cookbooks/${mockUser.id}`;
        service.getRecipeItems$(mockUser.id)
            .subscribe(response => {
                expect(response).toEqual(mockRecipeItems);
            });
        httpMock.expectOne(requestUrl)
            .flush({ recipeItems: mockRecipeItems });
        httpMock.verify();
    });

    function setup() {
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(CookbookApiService);
    }
});
