import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../store/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserIdService implements Resolve<string> {

    constructor(
        private userService: UserService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<string> {
        return this.userService.get$()
            .first()
            .map(user => user.id);
    }

}
