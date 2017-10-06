import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { provideMockActions } from '@ngrx/effects/testing';

import { UserEffects } from './user.effects';
import { UserLoginAction, UserLogoutAction, SetUserAction, RequestUserAction } from './user.actions';

import { CookbookApiService } from '../cookbook-api.service';
import { User } from '../models/user';
import { mockUser } from '../../test/user.mock';
import { cookbookApiServiceStub } from '../../test/cookbook-api.service.mock';

describe('UserEffects', () => {
    let apiService: CookbookApiService;
    let effects: UserEffects;
    let actions: ReplaySubject<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                UserEffects,
                { provide: CookbookApiService, useValue: cookbookApiServiceStub },
                provideMockActions(() => actions)
            ]
        });
        setup();
    });

    describe('userStatus$', () => {
        it('should return a SetUserStatusAction when RequestUserStatusAction is dispatched', () => {
            const expectedResult = new SetUserAction(mockUser);

            actions = new ReplaySubject(1);
            actions.next(new RequestUserAction(true));

            effects.userStatus$.subscribe(result => {
                expect(result).toEqual(expectedResult);
            });
        });
    });

    describe('userStatus$', () => {
        it('should return a UserLoginAction when RequestUserStatusAction throws an error', () => {
            const expectedResult = new UserLoginAction();
            apiService.getUser$ = () => Observable.of(null);

            actions = new ReplaySubject(1);
            actions.next(new RequestUserAction(true));

            effects.userStatus$.subscribe(result => {
                expect(result).toEqual(expectedResult);
            });
        });
    });

    describe('userLogout$', () => {
        it('should switch to apiService.logout$ when UserLogoutAction is dispatched', () => {
            spyOn(apiService, 'logout');

            actions = new ReplaySubject(1);
            actions.next(new UserLogoutAction());

            effects.userLogout$.subscribe(() => {
                expect(apiService.logout).toHaveBeenCalled();
            });
        });
    });

    describe('userLogin$', () => {
        it('should fire apiService.startLogin when UserLogoutAction is dispatched', () => {
            spyOn(apiService, 'startLogin');

            actions = new ReplaySubject(1);
            actions.next(new UserLoginAction());

            effects.userLogin$.subscribe(() => {
                expect(apiService.startLogin).toHaveBeenCalled();
            });
        });
    });

    function setup() {
        apiService = TestBed.get(CookbookApiService);
        effects = TestBed.get(UserEffects);
    }
});
