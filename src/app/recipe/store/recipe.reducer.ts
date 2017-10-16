import { combineReducers, Action, ActionReducer } from '@ngrx/store';
import { RecipeState } from './recipe-state';

import { nameReducer } from './name/name.reducer';
import { selectedProcessIdReducer } from './selected-process-id/selected-process-id.reducer';
import { processesReducer } from './processes/processes.reducer';
import { introductionReducer } from './introduction/introduction.reducer';
import { environment } from '../../../environments/environment.prod';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

const recipeReducers = {
    name: nameReducer,
    introduction: introductionReducer,
    processes: processesReducer,
    selectedProcessId: selectedProcessIdReducer
};

const developmentReducer: ActionReducer<{}> = compose(storeFreeze, combineReducers)(recipeReducers);
const productionReducer: ActionReducer<RecipeState> = combineReducers(recipeReducers);

export function recipeReducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}
