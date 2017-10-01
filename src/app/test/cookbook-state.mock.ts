import { CookbookState } from '../store/cookbook.state';
import { mockRecipeItems } from './recipe-items.mock';
import { mockUser } from './user.mock';

export const mockCookbookState: CookbookState = {
    recipeItems: mockRecipeItems,
    selectedRecipeId: mockRecipeItems[ 0 ].id,
    user: mockUser
};
