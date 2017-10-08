import { IntroductionAction, IntroductionActionTypes } from './introduction.actions';
export function introductionReducer(
    state: string,
    action: IntroductionAction
): string {
    switch (action.type) {
        case IntroductionActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
