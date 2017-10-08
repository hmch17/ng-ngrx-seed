import { lorem } from 'faker';
import * as _ from 'lodash';

import { Recipe } from '../store/models/recipe';
import { mockRecipeItems } from '../../test/recipe-items.mock';

export const mockRecipes: Recipe[] = getMockRecipes();
export const mockRecipe: Recipe = mockRecipes[ 0 ];

function getMockRecipes(): Recipe[] {
    return mockRecipeItems.map(recipeItem => <Recipe>_.defaultsDeep(
        {
            introduction: lorem.paragraph,
            processes: [ {
                id: '1',
                description: 'process one',
                ingredients: [ {
                    name: 'ingredient 01',
                    quantity: 'one piece'
                }]
            }, {
                id: '2',
                description: 'process two',
                ingredients: [ {
                    name: 'ingredient 02',
                    quantity: 'one piece'
                }]
            }]
        }, recipeItem));
}
