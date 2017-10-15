import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeEditComponent } from './edit/edit.component';
import { RecipeService } from './store/recipe.service';
import { RecipeApiService } from './store/recipe-api.service';
import { StoreModule } from '@ngrx/store';
import { BaseModule } from '../base/base.module';

@NgModule({
    imports: [
        BaseModule,
        RecipeRoutingModule
    ],
    declarations: [ RecipeEditComponent ],
    providers: [ RecipeService, RecipeApiService ]
})
export class RecipeModule { }
