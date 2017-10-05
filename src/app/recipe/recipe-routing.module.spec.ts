import { RecipeRoutingModule } from './recipe-routing.module';

describe('RecipeRoutingModule', () => {
    let recipeRoutingModule: RecipeRoutingModule;

    beforeEach(() => {
        recipeRoutingModule = new RecipeRoutingModule();
    });

    it('should create an instance', () => {
        expect(recipeRoutingModule).toBeTruthy();
    });
});
