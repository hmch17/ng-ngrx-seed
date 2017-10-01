import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { CookbookApiService } from '../cookbook-api.service';
import {
    UserActionTypes, RequestUserAction, SetUserAction, UserLoginAction, UserAction
} from './user.actions';
import { User } from '../models/user';

@Injectable()
export class UserStatusEffects {
    @Effect() userStatus$: Observable<UserAction>;
    @Effect({ dispatch: false }) userLogout$: Observable<UserAction>;
    @Effect({ dispatch: false }) userLogin$: any;

    constructor(
        private actions$: Actions,
        private apiService: CookbookApiService
    ) {
        this.userStatus$ = this.actions$
            .ofType(UserActionTypes.REQUEST)
            .map((action: RequestUserAction): boolean => action.payload)
            .switchMap((force: boolean) => this.apiService.getUser$(force))
            .distinctUntilChanged()
            .map((userStatus: User) => {
                if (userStatus) {
                    return new SetUserAction(userStatus);
                } else {
                    throw new Error('user status not set');
                }
            })
            .catch(error => Observable.of(new UserLoginAction()));

        this.userLogout$ = this.actions$
            .ofType(UserActionTypes.LOGOUT)
            .switchMapTo(this.apiService.logout());

        this.userLogin$ = this.actions$
            .ofType(UserActionTypes.LOGIN)
            .do(() => this.apiService.startLogin());

    }
}
