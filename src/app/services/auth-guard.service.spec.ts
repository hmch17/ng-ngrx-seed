/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { UserService } from '../store/user.service';
import { userServiceStub } from '../test/user.service.mock';

describe('AuthGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthGuardService,
                { provide: UserService, useValue: userServiceStub }
            ],
            imports: [ RouterTestingModule ]
        });
    });

    it('should  have a defined service', inject([ AuthGuardService ], (service: AuthGuardService) => {
        expect(service).toBeTruthy();
    }));

    it('should navigate the user if the user is not authenticated', async(inject([ AuthGuardService, Router ], (auth, router) => {
        spyOn(router, 'navigate');
        auth.canActivate().subscribe(value => {
            expect(value).toBeFalsy();
            expect(router.navigate).toHaveBeenCalled();
        });
    })));
});
