import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../utils/rxjs-operators';

import { RecipeItem } from './models/recipe-item';
import { User } from './models/user';
import { UserLogoutAction } from './user/user.actions';
import { environment } from '../../environments/environment';
import { cache } from '../utils/rxjs-helpers';

@Injectable()
export class CookbookApiService {
    baseUrl = environment.baseUrl;
    userId: string;
    user$: Observable<User>;
    recipeItems$: Observable<RecipeItem[]>;

    constructor(
        private http: HttpClient
    ) { }

    getRecipeItems$(userId: string): Observable<RecipeItem[]> {
        if (!this.userId || this.userId !== userId) {
            this.userId = userId;
            this.recipeItems$ = cache(this.http.get(`${this.baseUrl}/cookbooks/${userId}`)
                .map(cookbook => cookbook[ 'recipeItems' ]))
                .catch(err => Observable.throw(err));
        }
        return this.recipeItems$;
    }

    getUser$(force = false): Observable<User> {
        if (force || !this.user$) {
            this.user$ = cache(this.http.get(`${this.baseUrl}/user`))
                .catch(err => Observable.throw(err));
        }
        return this.user$;
    }

    logout() {
        this.http.post(`${this.baseUrl}/user/logout`, null)
            .do(() => this.startLogin())
            .catch(err => Observable.throw(err));
    }

    startLogin() {
        console.log('start login');
    }

}
