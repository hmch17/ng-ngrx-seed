import { random, name } from 'faker';
import * as _ from 'lodash';
import { RecipeItem } from '../store/models/recipe-item';

export const mockRecipeItems: RecipeItem[] = getMockRecipeItems();

function getMockRecipeItems(amount = 10): RecipeItem[] {
    let outcome: RecipeItem[] = [];
    _.times(amount, () => {
        outcome = [ ...outcome, {
            id: random.uuid(),
            name: name.findName()
        }];
    });
    return outcome;
}
