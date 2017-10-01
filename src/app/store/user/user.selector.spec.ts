import { userSelector } from './user.selector';
import { RecipeItem } from '../models/recipe-item';
import { mockCookbookState } from '../../test/cookbook-state.mock';
import { User } from '../models/user';

describe('userSelector', () => {
    it('should return the user', () => {
        const selectedState: User = userSelector(mockCookbookState);
        expect(selectedState).toEqual(mockCookbookState.user);
    });
});
