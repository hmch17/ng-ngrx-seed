import { TestBed, inject } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as _ from 'lodash';

import { RequestRecipeAction, PostRecipeAction, UpdateRecipeAction, DeleteRecipeAction } from './recipe.actions';
import { RecipeState } from './recipe-state';
import { recipeReducer } from './recipe.reducer';
import { RecipeService } from './recipe.service';
import { recipeSelector } from './recipe.selector';

import { mockRecipes } from '../test/recipes.mock';
import { NewRecipe } from './models/new-recipe';
import { nameSelector } from './name/name.selector';
import { introductionSelector } from './introduction/introduction.selector';
import { processesSelector } from './processes/processes.selector';
import { selectedProcessIdSelector } from './selected-process-id/selected-process-id.selector';

describe('RecipeService', () => {
    let store: Store<RecipeState>;
    const recipe = mockRecipes[ 0 ];
    const recipeId = recipe.id;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(recipeReducer)
            ],
            providers: [
                RecipeService
            ]
        });
        setup();
    });

    it('should be created', inject([ RecipeService ], (service: RecipeService) => {
        expect(service).toBeTruthy();
    }));

    it('should dispatch a RequestRecipeItemsAction(recipeId) when load(recipeId) is fired', inject(
        [ RecipeService ], (service: RecipeService) => {
            service.load(recipeId);
            expect(store.dispatch).toHaveBeenCalledWith(new RequestRecipeAction(recipeId));
        })
    );

    it('should select nameSelector when name$ is being called', inject(
        [ RecipeService ], (service: RecipeService) => {
            const name$ = service.name$;
            expect(store.select).toHaveBeenCalledWith(nameSelector);
        })
    );

    it('should select introductionSelector when introduction$ is being called', inject(
        [ RecipeService ], (service: RecipeService) => {
            const introduction$ = service.introduction$;
            expect(store.select).toHaveBeenCalledWith(introductionSelector);
        })
    );

    it('should select processesSelector when processes$ is being called', inject(
        [ RecipeService ], (service: RecipeService) => {
            const processes$ = service.processes$;
            expect(store.select).toHaveBeenCalledWith(processesSelector);
        })
    );

    it('should select selectedProcessIdSelector when processes$ is being called', inject(
        [ RecipeService ], (service: RecipeService) => {
            const selectedProcessId$ = service.selectedProcessId$;
            expect(store.select).toHaveBeenCalledWith(selectedProcessIdSelector);
        })
    );

    it('should dispatch a PostRecipeAction(newRecipe) when post(newRecipe) is fired', inject(
        [ RecipeService ], (service: RecipeService) => {
            const keysOfNewRecipe: string[] = _(recipe)
                .keys()
                .remove('id')
                .value();
            const newRecipe: NewRecipe = <NewRecipe>_.pick(recipe, keysOfNewRecipe);
            service.post(newRecipe);
            expect(store.dispatch).toHaveBeenCalledWith(new PostRecipeAction(newRecipe));
        })
    );

    it('should dispatch a UpdateRecipeAction(recipe) when update(recipe) is fired', inject(
        [ RecipeService ], (service: RecipeService) => {
            const updatedRecipe = _.assign({}, recipe, { name: 'test' });
            service.update(updatedRecipe);
            expect(store.dispatch).toHaveBeenCalledWith(new UpdateRecipeAction(updatedRecipe));
        })
    );

    it('should dispatch a DeleteRecipeAction(recipeId) when delete(recipeId) is fired', inject(
        [ RecipeService ], (service: RecipeService) => {
            service.delete(recipeId);
            expect(store.dispatch).toHaveBeenCalledWith(new DeleteRecipeAction(recipeId));
        })
    );

    function setup() {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        spyOn(store, 'select').and.callThrough();
    }
});
