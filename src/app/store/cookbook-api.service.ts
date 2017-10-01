import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../utils/rxjs-operators';

import { RecipeItem } from './models/recipe-item';
import { User } from './models/user';
import { UserLogoutAction } from './user/user.actions';
import { environment } from '../../environments/environment';

@Injectable()
export class CookbookApiService {
    baseUrl = environment.baseUrl;
    user$: Observable<User>;

    constructor(
        private http: HttpClient
    ) { }

    getRecipeItems$(userId: string): Observable<RecipeItem[]> {
        return <Observable<RecipeItem[]>>
            this.http.get(`${this.baseUrl}/cookbook/${userId}`)
                .publishLast()
                .refCount()
                .catch(err => Observable.throw(err));
    }

    getUser$(force = false): Observable<User> {
        if (force || !this.user$) {
            this.user$ = <Observable<User>>this.http.get(`${this.baseUrl}/user`)
                .publishLast()
                .refCount();
        }
        return this.user$;
    }

    logout(): Observable<any> {
        return this.http.post(`${this.baseUrl}/user/logout`, null)
            .do(() => this.startLogin());
    }

    startLogin() {
        console.log('start login');
    }

}
