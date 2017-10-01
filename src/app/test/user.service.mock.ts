import { Observable } from 'rxjs/Observable';
import { mockUser } from './user.mock';
export const userServiceStub = {
    get$: () => Observable.of(null),
    logout: () => { }
};
