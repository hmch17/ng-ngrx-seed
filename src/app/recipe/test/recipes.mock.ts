import { lorem, random } from 'faker';
import * as _ from 'lodash';

import { Recipe } from '../store/models/recipe';
import { mockRecipeItems } from '../../test/recipe-items.mock';
import { Process } from '../store/models/process';
import { Ingredient } from '../store/models/ingredient';
import { RecipeItem } from '../../store/models/recipe-item';
import { NewRecipe } from '../store/models/new-recipe';

export const mockRecipes: Recipe[] = getMockRecipes();
export const mockRecipe: Recipe = mockRecipes[ 0 ];
export const mockPostedRecipe: Recipe = _.assign({}, mockRecipe, { id: 'test' });
export const mockUpdatedRecipe: Recipe = _.assign({}, mockRecipe, { name: 'test' });

const keysOfNewRecipe = _(mockRecipe)
    .keys()
    .remove('id')
    .value();
export const mockNewRecipe = <NewRecipe>_.pick(mockRecipe, keysOfNewRecipe);

function getMockRecipes(): Recipe[] {
    return mockRecipeItems.map((recipeItem: RecipeItem) => {
        const { id, name } = recipeItem;
        return {
            id,
            name,
            introduction: lorem.paragraph(),
            processes: getMockProcesses()
        };
    });
}


function getMockProcesses(amount = 3): Process[] {
    return <Process[]>getItemArray(processGenerator, amount);
}

function getIngredients(amount = 3): Ingredient[] {
    return <Ingredient[]>getItemArray(ingredientGenerator, amount);
}

function getItemArray(itemGenerator: () => Object, amount = 3): Object[] {
    const items: Object[] = [];
    _.times(amount, () => items.push(itemGenerator()));
    return items;
}

function processGenerator(): Process {
    return {
        id: random.uuid(),
        description: lorem.paragraphs(),
        ingredients: getIngredients()
    };
}

function ingredientGenerator(): Ingredient {
    return {
        name: lorem.words(),
        quantity: `${random.number()} ${lorem.word()}`
    };
}
