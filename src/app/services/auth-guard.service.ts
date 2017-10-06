import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import '../utils/rxjs-operators';

import { UserService } from '../store/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.get$()
            .do(console.log)
            .filter(hasValue => !!hasValue)
            .map(user => !!user);
    }

}
