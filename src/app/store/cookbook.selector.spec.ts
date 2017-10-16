import { cookbookSelector } from './cookbook.selector';
import { CookbookState } from './cookbook-state';
import { mockCookbookState } from '../test/cookbook-state.mock';

describe('cookbookSelector', () => {
    it('should return the cookbook state', () => {
        const cookbook: CookbookState = cookbookSelector(mockCookbookState);
        const expectedResult: CookbookState = mockCookbookState;
        expect(cookbook).toEqual(expectedResult);
    });
});
