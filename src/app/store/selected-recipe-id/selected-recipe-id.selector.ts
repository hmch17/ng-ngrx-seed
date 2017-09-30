import { CookbookState } from '../cookbook.state';

export const selectedRecipeIdSelector = (state: CookbookState): string => state.selectedRecipeId;
