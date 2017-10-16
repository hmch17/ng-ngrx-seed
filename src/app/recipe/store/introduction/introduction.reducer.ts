import { IntroductionAction, IntroductionActionTypes } from './introduction.actions';
import { RecipeActionTypes, RecipeAction } from '../recipe.actions';
export function introductionReducer(
    state: string,
    action: IntroductionAction | RecipeAction
): string {
    switch (action.type) {
        case RecipeActionTypes.SET:
            return action.payload.introduction;
        case IntroductionActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
