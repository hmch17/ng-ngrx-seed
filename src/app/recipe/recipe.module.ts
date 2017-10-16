import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeEditComponent } from './edit/edit.component';
import { RecipeService } from './store/recipe.service';
import { RecipeApiService } from './store/recipe-api.service';
import { StoreModule } from '@ngrx/store';
import { BaseModule } from '../base/base.module';
import { EffectsModule } from '@ngrx/effects';
import { recipeReducer } from './store/recipe.reducer';
import { RecipeEffects } from './store/recipe.effects';

@NgModule({
    imports: [
        BaseModule,
        RecipeRoutingModule,
        StoreModule.forFeature('recipe', recipeReducer),
        EffectsModule.forFeature([ RecipeEffects ])
    ],
    declarations: [ RecipeEditComponent ],
    providers: [ RecipeService, RecipeApiService ]
})
export class RecipeModule { }
