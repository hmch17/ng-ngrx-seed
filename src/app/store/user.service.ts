import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { User } from './models/user';
import { UserLogoutAction, UserLoginAction, RequestUserAction } from './user/user.actions';
import { userSelector } from './user/user.selector';
import { CookbookState } from './cookbook.state';

@Injectable()
export class UserService {

    constructor(
        private store: Store<CookbookState>
    ) {
    }

    load(force = false): void {
        this.store.dispatch(new RequestUserAction(force));
    }

    get$(): Observable<User> {
        this.load();
        return this.store.select(userSelector);
    }

    logout(): void {
        this.store.dispatch(new UserLogoutAction());
    }

    startLogin(): void {
        this.store.dispatch(new UserLoginAction());
    }

}
