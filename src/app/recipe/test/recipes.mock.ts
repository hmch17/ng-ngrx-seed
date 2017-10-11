import { lorem, random } from 'faker';
import * as _ from 'lodash';

import { Recipe } from '../store/models/recipe';
import { mockRecipeItems } from '../../test/recipe-items.mock';
import { Process } from '../store/models/process';
import { Ingredient } from '../store/models/ingredient';
import { RecipeItem } from '../../store/models/recipe-item';

export const mockRecipes: Recipe[] = getMockRecipes();
export const mockRecipe: Recipe = mockRecipes[ 0 ];

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
    return <Process[]>getItemArray({
        id: random.uuid(),
        description: lorem.paragraphs(),
        ingredients: getIngredients()
    }, amount);
}

function getIngredients(amount = 3): Ingredient[] {
    return <Ingredient[]>getItemArray({
        name: lorem.words(),
        quantity: `${random.number()} ${lorem.word()}`
    }, amount);
}

function getItemArray(item: Object, amount = 3): Object[] {
    const items: Object[] = [];
    _.times(amount, () => {
        items.push(item);
    });
    return items;
}
