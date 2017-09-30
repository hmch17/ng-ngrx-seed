import { TestBed, inject } from '@angular/core/testing';

import { CookbookApiService } from './cookbook-api.service';

describe('CookbookApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookbookApiService]
    });
  });

  it('should be created', inject([CookbookApiService], (service: CookbookApiService) => {
    expect(service).toBeTruthy();
  }));
});
