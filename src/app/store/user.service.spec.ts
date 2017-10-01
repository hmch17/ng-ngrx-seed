import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TestBed, async, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { userSelector } from './user/user.selector';
import { RequestUserAction, UserLogoutAction, UserLoginAction } from './user/user.actions';
import { cookbookReducer } from './cookbook.reducer';
import { CookbookState } from './cookbook.state';

describe('UserService', () => {
    let store: Store<CookbookState>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(cookbookReducer)
            ],
            providers: [
                UserService
            ]
        });
        setup();
    });

    it('should  have a defined service', inject([ UserService ], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    it('should dispatch a RequestUserStatusAction when loadUserStatus is fired',
        inject([ UserService ], (service: UserService) => {
            service.load(true);
            expect(store.dispatch).toHaveBeenCalledWith(new RequestUserAction(true));
        })
    );

    it('should get UserStatus$ when getUserStatus$ is fired',
        inject([ UserService ], (service: UserService) => {
            service.get$();
            expect(store.select).toHaveBeenCalledWith(userSelector);
        })
    );

    it('should dispatch a UserLogoutAction when logout is fired',
        inject([ UserService ], (service: UserService) => {
            service.logout();
            expect(store.dispatch).toHaveBeenCalledWith(new UserLogoutAction());
        })
    );

    it('should dispatch a UserLoginAction when startLogin is fired',
        inject([ UserService ], (service: UserService) => {
            service.startLogin();
            expect(store.dispatch).toHaveBeenCalledWith(new UserLoginAction());
        })
    );
    function setup() {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        spyOn(store, 'select').and.callThrough();
    }
});
