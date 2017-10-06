import { Observable } from 'rxjs/Observable';
import '../utils/rxjs-operators';
import { mockRecipeItems } from './recipe-items.mock';
import { UserLogoutAction } from '../store/user/user.actions';
import { mockUser } from './user.mock';
export const cookbookApiServiceStub = {
    getRecipeItems$: (userId: string) => Observable.of(mockRecipeItems),
    logout: () => Observable.of(new UserLogoutAction()),
    startLogin: () => Observable.of(null),
    getUser$: () => Observable.of(mockUser)
};
