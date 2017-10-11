import { TestBed, inject } from '@angular/core/testing';

import { UserIdService } from './user-id.service';
import { userServiceStub } from '../test/user.service.mock';
import { UserService } from '../store/user.service';

describe('UserIdService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserIdService,
                { provide: UserService, useValue: userServiceStub }]
        });
    });

    it('should be created', inject([ UserIdService, UserService ], (service: UserIdService) => {
        expect(service).toBeTruthy();
    }));
});
