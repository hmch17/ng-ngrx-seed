import { combineReducers, Action } from '@ngrx/store';
import { RecipeState } from './recipe.state';

import { nameReducer } from './name/name.reducer';
import { selectedProcessIdReducer } from './selected-process-id/selected-process-id.reducer';
import { processesReducer } from './processes/processes.reducer';
import { introductionReducer } from './introduction/introduction.reducer';

export const recipeReducer = combineReducers({
    name: nameReducer,
    introduction: introductionReducer,
    processes: processesReducer,
    selectedProcessId: selectedProcessIdReducer
});


