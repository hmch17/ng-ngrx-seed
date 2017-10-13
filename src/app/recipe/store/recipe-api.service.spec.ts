import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'lodash';

import { RecipeApiService } from './recipe-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { mockRecipe, mockNewRecipe } from '../test/recipes.mock';
import { Recipe } from './models/recipe';

describe('RecipeApiService', () => {
    let httpMock: HttpTestingController;
    let service: RecipeApiService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ RecipeApiService ],
            imports: [ HttpClientTestingModule ]
        });
        setup();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should successfully get recipe when getById$(id)', () => {
        const requestUrl = `${service.baseUrl}/recipes/${mockRecipe.id}`;
        service.getById$(mockRecipe.id)
            .subscribe(response => {
                expect(response).toEqual(mockRecipe);
            });
        httpMock.expectOne(requestUrl)
            .flush(mockRecipe);
        httpMock.verify();
    });

    it('should post a new recipe', () => {
        const requestUrl = `${service.baseUrl}/recipes`;
        const newRecipe = mockNewRecipe;
        const postedRecipe = <Recipe>_.assign({}, mockNewRecipe, { id: 'test' });
        service.post$(newRecipe)
            .subscribe(response => {
                expect(response).toEqual(postedRecipe);
            });
        httpMock.expectOne(requestUrl)
            .flush(postedRecipe);
        httpMock.verify();
    });

    it('should update an existing recipe when update$()', () => {
        const requestUrl = `${service.baseUrl}/recipes/${mockRecipe.id}`;
        const updatedRecipe = <Recipe>_.assign({}, mockRecipe, { introduction: 'test' });
        service.update$(updatedRecipe)
            .subscribe(response => {
                expect(response).toEqual(updatedRecipe);
            });
        httpMock.expectOne(requestUrl)
            .flush(updatedRecipe);
        httpMock.verify();
    });

    it('should be able to delete an existing recipe', () => {
        const requestUrl = `${service.baseUrl}/recipes/${mockRecipe.id}`;
        const deleteResponse = new Response('test');
        service.delete$(mockRecipe.id)
            .subscribe(response => {
                expect(response).toEqual(deleteResponse);
            });
        httpMock.expectOne(requestUrl)
            .flush(deleteResponse);
        httpMock.verify();
    });

    function setup() {
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(RecipeApiService);
    }

});
