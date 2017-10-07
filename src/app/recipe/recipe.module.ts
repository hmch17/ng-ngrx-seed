import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeEditComponent } from './edit/edit.component';
import { RecipeService } from './store/recipe.service';
import { RecipeApiService } from './store/recipe-api.service';
import { StoreModule } from '@ngrx/store';
import { GloballySharedModule } from '../globally-shared/globally-shared.module';

@NgModule({
    imports: [
        CommonModule,
        GloballySharedModule,
        RecipeRoutingModule
    ],
    declarations: [ RecipeEditComponent ],
    providers: [ RecipeService, RecipeApiService ]
})
export class RecipeModule { }
